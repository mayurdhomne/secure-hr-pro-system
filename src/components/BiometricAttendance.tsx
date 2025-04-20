
import React, { useState, useRef, useEffect } from "react";
import { Camera, Fingerprint, Check, AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

const BiometricAttendance = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"face" | "fingerprint">("face");
  const [capturing, setCapturing] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [verified, setVerified] = useState<boolean | null>(null);
  const [progressValue, setProgressValue] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "user" } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      toast({
        title: "Camera Error",
        description: "Could not access camera. Please check permissions.",
        variant: "destructive",
      });
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  useEffect(() => {
    if (activeTab === "face") {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [activeTab]);

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      setCapturing(true);
      
      // Simulate camera flash
      const flashElement = document.createElement("div");
      flashElement.style.position = "fixed";
      flashElement.style.top = "0";
      flashElement.style.left = "0";
      flashElement.style.width = "100%";
      flashElement.style.height = "100%";
      flashElement.style.backgroundColor = "white";
      flashElement.style.opacity = "0.8";
      flashElement.style.zIndex = "9999";
      flashElement.style.transition = "opacity 0.5s ease-out";
      document.body.appendChild(flashElement);
      
      setTimeout(() => {
        flashElement.style.opacity = "0";
        setTimeout(() => {
          document.body.removeChild(flashElement);
        }, 500);
      }, 50);
      
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      }
      
      verifyBiometric("face");
    }
  };

  const simulateFingerprint = () => {
    setCapturing(true);
    verifyBiometric("fingerprint");
  };

  const verifyBiometric = (type: "face" | "fingerprint") => {
    setProcessing(true);
    setProgressValue(0);
    
    // Simulated biometric verification with progress animation
    const interval = setInterval(() => {
      setProgressValue(prev => {
        const newValue = prev + 10;
        if (newValue >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            // Mock success with 85% probability
            const success = Math.random() > 0.15;
            setVerified(success);
            setProcessing(false);
            setCapturing(false);
            
            if (success) {
              toast({
                title: "Verification Successful",
                description: `${type === "face" ? "Facial recognition" : "Fingerprint"} verification successful`,
              });
            } else {
              toast({
                title: "Verification Failed",
                description: "Please try again or use alternative method",
                variant: "destructive",
              });
            }
          }, 500);
        }
        return newValue;
      });
    }, 150);
  };

  const resetState = () => {
    setVerified(null);
    setProcessing(false);
    setCapturing(false);
    setProgressValue(0);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Biometric Attendance</CardTitle>
        <CardDescription>Verify your identity to mark attendance</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={(value) => { 
          setActiveTab(value as "face" | "fingerprint");
          resetState();
        }}>
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="face" className="flex items-center gap-2">
              <Camera className="h-4 w-4" />
              <span>Facial Recognition</span>
            </TabsTrigger>
            <TabsTrigger value="fingerprint" className="flex items-center gap-2">
              <Fingerprint className="h-4 w-4" />
              <span>Fingerprint</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="face" className="space-y-4">
            <div className="relative rounded-lg overflow-hidden bg-black aspect-video">
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                muted 
                className={`w-full h-full object-cover ${capturing ? 'opacity-50' : ''}`}
              />
              
              {capturing && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                  {processing && (
                    <div className="w-4/5 space-y-2">
                      <p className="text-white text-center mb-2">Processing</p>
                      <Progress value={progressValue} />
                    </div>
                  )}
                  
                  {verified !== null && !processing && (
                    <div className="text-center">
                      {verified ? (
                        <div className="flex flex-col items-center">
                          <div className="rounded-full bg-green-100 p-3 mb-2">
                            <Check className="h-8 w-8 text-green-600" />
                          </div>
                          <p className="text-white font-medium">Verification Successful</p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <div className="rounded-full bg-red-100 p-3 mb-2">
                            <AlertTriangle className="h-8 w-8 text-red-600" />
                          </div>
                          <p className="text-white font-medium">Verification Failed</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <canvas ref={canvasRef} className="hidden" />
            
            {verified === null && (
              <Button 
                className="w-full" 
                size="lg" 
                onClick={captureImage} 
                disabled={capturing || processing}
              >
                <Camera className="mr-2 h-4 w-4" /> Scan Face
              </Button>
            )}
            
            {verified !== null && (
              <Button 
                className="w-full" 
                variant={verified ? "default" : "outline"}
                onClick={resetState}
              >
                {verified ? "Mark Attendance" : "Try Again"}
              </Button>
            )}
          </TabsContent>
          
          <TabsContent value="fingerprint" className="space-y-4">
            <div className="flex flex-col items-center justify-center py-8">
              <div className={`border-2 ${capturing ? 'border-primary' : 'border-muted'} rounded-full p-6 mb-4`}>
                <Fingerprint className={`h-24 w-24 ${capturing ? 'text-primary animate-pulse' : 'text-muted-foreground'}`} />
              </div>
              
              {processing && (
                <div className="w-4/5 space-y-2 mt-4">
                  <p className="text-center mb-2">Processing</p>
                  <Progress value={progressValue} />
                </div>
              )}
              
              {verified !== null && !processing && (
                <>
                  {verified ? (
                    <Alert className="bg-green-50 border-green-200 text-green-800">
                      <Check className="h-4 w-4" />
                      <AlertTitle>Success</AlertTitle>
                      <AlertDescription>
                        Fingerprint verified successfully
                      </AlertDescription>
                    </Alert>
                  ) : (
                    <Alert variant="destructive">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>Verification Failed</AlertTitle>
                      <AlertDescription>
                        Please try again or use facial recognition
                      </AlertDescription>
                    </Alert>
                  )}
                </>
              )}
            </div>
            
            {verified === null && (
              <Button 
                className="w-full" 
                size="lg" 
                onClick={simulateFingerprint}
                disabled={capturing || processing}
              >
                <Fingerprint className="mr-2 h-4 w-4" /> Scan Fingerprint
              </Button>
            )}
            
            {verified !== null && (
              <Button 
                className="w-full" 
                variant={verified ? "default" : "outline"}
                onClick={resetState}
              >
                {verified ? "Mark Attendance" : "Try Again"}
              </Button>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex-col space-y-2">
        <div className="text-xs text-muted-foreground text-center">
          Your biometric data is securely processed and never stored permanently.
        </div>
        <div className="text-xs text-center">
          <span className="text-primary font-medium">Need help?</span> Contact your HR administrator.
        </div>
      </CardFooter>
    </Card>
  );
};

export default BiometricAttendance;

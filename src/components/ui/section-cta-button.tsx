"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Clock, ThumbsUp, ShieldCheck } from "lucide-react";

interface SectionCtaButtonProps {
  className?: string;
}

export function SectionCtaButton({ className = "" }: SectionCtaButtonProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col items-center gap-4">
        <Button 
          asChild 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 h-auto text-lg w-full md:w-[70%] mx-auto animate-pulse-slow"
        >
          <Link href="https://pay.hub.la/NOOiTYhnQcdZbytR5I0a?_path=%2Fr%2FEun1zKIRP22RP2ac4bRA" target="_blank">
            Entre para o TEAC
          </Link>
        </Button>
        
        <div className="flex flex-wrap justify-center gap-6 mt-4 text-sm text-muted-foreground w-full md:w-[70%] mx-auto">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-blue-400" />
            <span>Acesso vitalício</span>
          </div>
          <div className="flex items-center gap-2">
            <ThumbsUp className="h-4 w-4 text-blue-400" />
            <span>Suporte ao vivo via zoom</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-blue-400" />
            <span>7 dias de garantia</span>
          </div>
        </div>
      </div>
    </div>
  );
} 
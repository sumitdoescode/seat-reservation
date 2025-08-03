"use client";
import { ArrowLeft, EllipsisVertical } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { react, useContext } from "react";
import { SeatContext } from "@/contexts/SeatContext";

const Navbar = () => {
    const { seatNumber, setSeatNumber } = useContext(SeatContext);
    return (
        <div className="flex items-center justify-between px-4 py-3 bg-[#7c13a1] text-white">
            <ArrowLeft />
            <h1 className="uppercase font-semibold text-base">Book seat</h1>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <EllipsisVertical />
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Enter your seat number</AlertDialogTitle>
                        <Input type="number" placeholder="015" className={"mt-2"} value={seatNumber} onChange={(e) => setSeatNumber(e.target.value)} />
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default Navbar;

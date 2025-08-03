"use client";
import React, { useState, useContext } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SeatContext } from "@/contexts/SeatContext";

const formatDate = () => {
    const d = new Date();
    return `${d.getDate().toString().padStart(2, "0")}-${d.toLocaleString("en-US", { month: "short" })}-${d.getFullYear()}`;
};

const formatDate2 = () => {
    return new Date().toISOString().slice(0, 10);
};

const page = () => {
    const { seatNumber } = useContext(SeatContext);
    const [date, setDate] = useState(formatDate2());
    const [city, setCity] = useState("Noida");
    const [dc, setDC] = useState("NOIDA-STP");
    const [buildingNumber, setBuildingNumber] = useState("ACECAPITOL");
    const [floor, setFloor] = useState("FLOOR-10");
    const [wing, setWing] = useState("A");
    return (
        <section className="px-4 pt-4 pb-16 bg-stone-100">
            <div className="px-4 pt-4 pb-10 bg-white rounded shadow-md">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-base font-semibold">Recent Bookings</h2>
                        <p className="text-stone-400 text-xs mt-1 font-medium">{formatDate()}</p>
                    </div>
                    <button className="uppercase text-xs font-medium text-green-600 border-2 px-5 py-0.5 rounded-full border-green-600">booked</button>
                </div>
                <div className="mt-5">
                    <h2 className="text-base font-semibold">
                        Cubicle : <span className="uppercase">{`NOSTP 01 ${floor.slice(-2)} ${wing} ${seatNumber}`}</span>
                    </h2>
                    <p className="text-stone-600 text-xs mt-0.5 font-medium">
                        {city}, {dc}, {buildingNumber}, {floor}, {wing} Wing
                    </p>
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-sm font-semibold">Provide your DC and building preferences</h2>
                <div className="p-2 flex flex-col gap-4">
                    <div>
                        <Label htmlFor="date" className={"text-stone-500 text-xs font-medium"}>
                            Date
                        </Label>
                        <Input type="date" className={"mt-1.5"} id="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>

                    <div>
                        <Label htmlFor="city" className={"text-stone-500 text-xs font-medium"}>
                            City
                        </Label>
                        <Input type="text" className={"mt-1.5"} id="city" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>

                    <div>
                        <Label htmlFor="dc" className={"text-stone-500 text-xs font-medium"}>
                            DC
                        </Label>
                        <Input type="text" className={"mt-1.5"} id="dc" placeholder="DC" value={dc} onChange={(e) => setDC(e.target.value)} />
                    </div>

                    <div>
                        <Label className={"text-stone-500 text-xs font-medium"}>Allocation</Label>
                        <RadioGroup defaultValue="general" className={"flex items-center gap-4 mt-1.5"}>
                            <div className="flex items-center gap-1">
                                <RadioGroupItem value="account" id="r1" />
                                <Label htmlFor="r1" className={"text-sm"}>
                                    Account
                                </Label>
                            </div>
                            <div className="flex items-center gap-1">
                                <RadioGroupItem value="unit/submit" id="r2" />
                                <Label htmlFor="r2">Unit/Submit</Label>
                            </div>
                            <div className="flex items-center gap-1">
                                <RadioGroupItem value="general" id="r3" />
                                <Label htmlFor="r3">General</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div>
                        <Label htmlFor="building-number" className={"text-stone-500 text-xs font-medium"}>
                            Building Number
                        </Label>
                        <Select defaultValue={buildingNumber} onValueChange={(value) => setBuildingNumber(value)}>
                            <SelectTrigger className="w-full mt-1.5">
                                <SelectValue placeholder="Building Number" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ACECAPITOL">ACECAPITOL</SelectItem>
                                <SelectItem value="BHUT01">BHUT01</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-full">
                            <Label htmlFor="floor" className={"text-stone-500 text-xs font-medium"}>
                                Floor
                            </Label>
                            <Input type="text" className={"mt-1.5 w-full"} id="floor" placeholder="Floor" value={floor} onChange={(e) => setFloor(e.target.value)} />
                        </div>
                        <div className="w-full">
                            <Label htmlFor="wing" className={"text-stone-500 text-xs font-medium"}>
                                Wing
                            </Label>
                            <Select defaultValue={wing} onValueChange={(value) => setWing(value)}>
                                <SelectTrigger className="w-full mt-1.5">
                                    <SelectValue placeholder="Wing" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="A">A</SelectItem>
                                    <SelectItem value="C">C</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 mt-6 bg-white rounded shadow-md">
                <div className="flex items-center justify-between">
                    <h2 className="text-base font-semibold text-stone-900">Available Seats</h2>
                    <h3 className="text-2xl font-medium text-green-600">0</h3>
                </div>
            </div>

            <div className="mt-6 flex items-start gap-4">
                <Checkbox checked={true} className={"mt-0.5"} />
                <p className="text-stone-800 text-sm font-normal mt-0">Are you willing to disclose that you are in office so that colleagues can know for better collaboration. You can change this while booking next time or rebooking.</p>
            </div>
        </section>
    );
};

export default page;

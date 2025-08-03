import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const formatDate = () => {
    const d = new Date();
    return `${d.getDate().toString().padStart(2, "0")}-${d.toLocaleString("en-US", { month: "short" })}-${d.getFullYear()}`;
};

const page = () => {
    return (
        <section className="px-4 py-4 bg-stone-100">
            <div className="px-4 pt-4 pb-10 bg-white rounded shadow-md">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-base font-semibold">Recent Bookings</h2>
                        <p className="text-stone-400 text-xs mt-1 font-medium">{formatDate()}</p>
                    </div>
                    <button className="uppercase text-xs font-medium text-green-600 border-2 px-5 py-0.5 rounded-full border-green-600">booked</button>
                </div>
                <div className="mt-5">
                    <h2 className="text-base font-semibold">Cubicle : NOSTP 01 10 A 015</h2>
                    <p className="text-stone-600 text-xs mt-0.5 font-medium">Noida, NOIDA-STP, ACECAPITOL, FLOOR-10, A Wing</p>
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-sm font-semibold">Provide your DC and building preferences</h2>
                <div className="p-2 flex flex-col gap-4">
                    <div>
                        <Label htmlFor="date" className={"text-stone-500 text-xs font-medium"}>
                            Date
                        </Label>
                        <Input type="date" className={"mt-1.5"} id="date" placeholder="Date" />
                    </div>

                    <div>
                        <Label htmlFor="city" className={"text-stone-500 text-xs font-medium"}>
                            City
                        </Label>
                        <Input type="text" className={"mt-1.5"} id="city" placeholder="City" value="Noida" />
                    </div>

                    <div>
                        <Label htmlFor="dc" className={"text-stone-500 text-xs font-medium"}>
                            DC
                        </Label>
                        <Input type="text" className={"mt-1.5"} id="dc" placeholder="DC" value="NOIDA-STP" />
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
                        <Input type="text" className={"mt-1.5"} id="building-numer" placeholder="Building Number" value="ACECAPITOL" />
                    </div>

                    <div className="flex items-center gap-3">
                        <div>
                            <Label htmlFor="floor" className={"text-stone-500 text-xs font-medium"}>
                                Floor
                            </Label>
                            <Input type="text" className={"mt-1.5"} id="floor" placeholder="Floor" value="FLOOR-10" />
                        </div>
                        <div>
                            <Label htmlFor="wing" className={"text-stone-500 text-xs font-medium"}>
                                Wing
                            </Label>
                            <Input type="text" className={"mt-1.5"} id="wing" placeholder="Wing" value="A" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 mt-10 bg-white rounded shadow-md">
                <div className="flex items-center justify-between">
                    <h2 className="text-base font-semibold text-stone-900">Available Seats</h2>
                    <h3 className="text-2xl font-medium text-green-600">0</h3>
                </div>
            </div>

            <div className="mt-8 flex items-start gap-4">
                <Checkbox checked={true} className={"mt-0.5"} />
                <p className="text-stone-800 text-sm font-normal mt-0">Are you willing to disclose that you are in office so that colleagues can know for better collaboration. You can change this while booking next time or rebooking.</p>
            </div>
        </section>
    );
};

export default page;

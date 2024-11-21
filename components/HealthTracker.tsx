"use client";

// React imports
import { useState, ChangeEvent, FormEvent } from 'react'

// UI Component imports
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

// Icon imports
import { 
  Heart, Home, Activity, Settings, ShoppingBag, 
  Newspaper, Calculator, BarChart, Zap 
} from 'lucide-react'

// Tab component imports
import { HomeTab } from './tabs/HomeTab'
import { NewsletterTab } from './tabs/NewsletterTab'
import { StoreTab } from './tabs/StoreTab'
import { CalculatorTab } from './tabs/CalculatorTab'
import { SettingsTab } from './tabs/SettingsTab'

// Types
interface HealthData {
    steps: string;
    calories: string;
    water: string;
    sleep: string;
    weight: string;
    concerns: string;
}

export default function HealthTracker() {
    const [activeTab, setActiveTab] = useState("home")
    const [healthData, setHealthData] = useState<HealthData>({
        steps: '',
        calories: '',
        water: '',
        sleep: '',
        weight: '',
        concerns: ''
    })
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setHealthData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Submitted health data:', healthData)
    }

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-primary text-white">
                <div className="flex items-center space-x-2">
                    <Heart className="h-6 w-6" />
                    <h1 className="text-xl font-semibold">HealthTrack</h1>
                </div>
                <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
            </header>

            {/* Main Content */}
            <main className="flex-1 pt-16 pb-20 px-4">
                <div className="max-w-2xl mx-auto w-full">
                    {/* Welcome Card - Always visible */}
                    <Card className="bg-background-accent border-none mb-4 w-full">
                        <CardHeader>
                            <CardTitle className="text-xl text-primary">Welcome back, Alex!</CardTitle>
                            <CardDescription className="text-secondary">
                                Here's your health summary for today.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-primary">{healthData.steps || '0'}</p>
                                    <p className="text-sm text-secondary">Steps</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-primary">{healthData.calories || '0'}</p>
                                    <p className="text-sm text-secondary">Calories</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-primary">{healthData.sleep || '0'}</p>
                                    <p className="text-sm text-secondary">Sleep (hrs)</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Tab Contents */}
                    <div className="w-full">
                        {activeTab === "home" && <HomeTab healthData={healthData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />}
                        {activeTab === "newsletter" && <NewsletterTab />}
                        {activeTab === "store" && <StoreTab />}
                        {activeTab === "calculator" && <CalculatorTab />}
                        {activeTab === "settings" && <SettingsTab />}
                    </div>
                </div>
            </main>

            {/* Bottom Navigation with Tabs */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-secondary/20">
                <div className="max-w-2xl mx-auto">
                    <nav className="grid grid-cols-5 h-16">
                        <button 
                            onClick={() => setActiveTab("home")}
                            className={`flex flex-col items-center justify-center space-y-1 ${
                                activeTab === "home" ? "text-primary" : "text-secondary-bold"
                            }`}
                        >
                            <Home className="h-5 w-5" />
                            <span className="text-xs">Home</span>
                        </button>
                        <button 
                            onClick={() => setActiveTab("newsletter")}
                            className={`flex flex-col items-center justify-center space-y-1 ${
                                activeTab === "newsletter" ? "text-primary" : "text-secondary-bold"
                            }`}
                        >
                            <Newspaper className="h-5 w-5" />
                            <span className="text-xs">News</span>
                        </button>
                        <button 
                            onClick={() => setActiveTab("store")}
                            className={`flex flex-col items-center justify-center space-y-1 ${
                                activeTab === "store" ? "text-primary" : "text-secondary-bold"
                            }`}
                        >
                            <ShoppingBag className="h-5 w-5" />
                            <span className="text-xs">Store</span>
                        </button>
                        <button 
                            onClick={() => setActiveTab("calculator")}
                            className={`flex flex-col items-center justify-center space-y-1 ${
                                activeTab === "calculator" ? "text-primary" : "text-secondary-bold"
                            }`}
                        >
                            <Calculator className="h-5 w-5" />
                            <span className="text-xs">Calc</span>
                        </button>
                        <button 
                            onClick={() => setActiveTab("settings")}
                            className={`flex flex-col items-center justify-center space-y-1 ${
                                activeTab === "settings" ? "text-primary" : "text-secondary-bold"
                            }`}
                        >
                            <Settings className="h-5 w-5" />
                            <span className="text-xs">Settings</span>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}
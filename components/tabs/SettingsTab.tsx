"use client";

import { useState, FormEvent, ChangeEvent } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Settings } from 'lucide-react'

export function SettingsTab() {
  return (
    <div className="space-y-6 w-full">
      <Card className="w-full">
        <CardHeader className="w-full px-6">
          <CardTitle className="text-xl flex items-center">
            <Settings className="mr-2 h-5 w-5 text-primary" /> Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6">
          <form className="space-y-4 w-full">
            <div className="w-full space-y-2">
              <Label htmlFor="name" className="text-primary">Name</Label>
              <Input 
                id="name" 
                className="w-full border-secondary/30 focus:border-primary"
                placeholder="Enter your name" 
              />
            </div>
            <div className="w-full space-y-2">
              <Label htmlFor="email" className="text-primary">Email</Label>
              <Input 
                id="email" 
                type="email" 
                className="w-full border-secondary/30 focus:border-primary"
                placeholder="Enter your email" 
              />
            </div>
            <div className="w-full space-y-2">
              <Label htmlFor="notifications" className="text-primary">Notifications</Label>
              <select 
                id="notifications" 
                className="w-full h-10 px-3 rounded-md border border-secondary/30 focus:border-primary bg-white"
              >
                <option>All notifications</option>
                <option>Important only</option>
                <option>None</option>
              </select>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white mt-6">
              Save Settings
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
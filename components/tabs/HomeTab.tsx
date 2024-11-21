"use client";

import { ChangeEvent, FormEvent } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { Activity } from 'lucide-react'

interface HomeTabProps {
  healthData: HealthData;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export function HomeTab({ healthData, handleInputChange, handleSubmit }: HomeTabProps) {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <Activity className="mr-2 h-5 w-5 text-primary" /> Daily Health Update
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="weight" className="text-primary">Weight (kg)</Label>
                  <Input 
                    id="weight"
                    name="weight"
                    type="number"
                    value={healthData.weight}
                    onChange={handleInputChange}
                    className="border-secondary/30 focus:border-primary"
                    placeholder="Enter weight"
                  />
                </div>
                <div>
                  <Label htmlFor="steps" className="text-primary">Steps</Label>
                  <Input 
                    id="steps"
                    name="steps"
                    type="number"
                    value={healthData.steps}
                    onChange={handleInputChange}
                    className="border-secondary/30 focus:border-primary"
                    placeholder="Enter steps"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="calories" className="text-primary">Calories</Label>
                  <Input 
                    id="calories"
                    name="calories"
                    type="number"
                    value={healthData.calories}
                    onChange={handleInputChange}
                    className="border-secondary/30 focus:border-primary"
                    placeholder="Enter calories"
                  />
                </div>
                <div>
                  <Label htmlFor="water" className="text-primary">Water (ml)</Label>
                  <Input 
                    id="water"
                    name="water"
                    type="number"
                    value={healthData.water}
                    onChange={handleInputChange}
                    className="border-secondary/30 focus:border-primary"
                    placeholder="Enter water intake"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="concerns" className="text-primary">Health Concerns</Label>
                <Input 
                  id="concerns"
                  name="concerns"
                  value={healthData.concerns}
                  onChange={handleInputChange}
                  className="border-secondary/30 focus:border-primary"
                  placeholder="Enter any health concerns"
                />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                Save Today's Data
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }
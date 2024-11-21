"use client";

import { useState, FormEvent, ChangeEvent } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { BarChart } from 'lucide-react'

export function CalculatorTab() {
    const [calculatorData, setCalculatorData] = useState({
        age: '',
        gender: 'Male',
        height: '',
        weight: '',
        activity: 'Sedentary'
    })
    
    const handleCalculatorSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Calculator data:', calculatorData)
    }
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setCalculatorData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <BarChart className="mr-2 h-5 w-5 text-primary" /> Nutrition Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleCalculatorSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age" className="text-primary">Age</Label>
                  <Input 
                    id="age" 
                    type="number" 
                    className="border-secondary/30 focus:border-primary"
                    placeholder="Enter your age" 
                    name="age"
                    value={calculatorData.age}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="gender" className="text-primary">Gender</Label>
                  <select 
                    id="gender" 
                    className="w-full h-10 px-3 rounded-md border border-secondary/30 focus:border-primary"
                    name="gender"
                    value={calculatorData.gender}
                    onChange={handleInputChange}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="height" className="text-primary">Height (cm)</Label>
                  <Input 
                    id="height" 
                    type="number" 
                    className="border-secondary/30 focus:border-primary"
                    placeholder="Enter height" 
                    name="height"
                    value={calculatorData.height}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="calc-weight" className="text-primary">Weight (kg)</Label>
                  <Input 
                    id="calc-weight" 
                    type="number" 
                    className="border-secondary/30 focus:border-primary"
                    placeholder="Enter weight" 
                    name="weight"
                    value={calculatorData.weight}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="activity" className="text-primary">Activity Level</Label>
                <select 
                  id="activity" 
                  className="w-full h-10 px-3 rounded-md border border-secondary/30 focus:border-primary"
                  name="activity"
                  value={calculatorData.activity}
                  onChange={handleInputChange}
                >
                  <option>Sedentary</option>
                  <option>Lightly Active</option>
                  <option>Moderately Active</option>
                  <option>Very Active</option>
                  <option>Extra Active</option>
                </select>
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                Calculate
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }
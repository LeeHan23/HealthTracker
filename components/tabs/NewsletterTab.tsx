"use client";

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Zap } from 'lucide-react'

export function NewsletterTab() {
    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <Zap className="mr-2 h-5 w-5 text-primary" /> Health Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-background-accent p-4 rounded-lg">
                <h3 className="font-semibold text-primary">The Benefits of Mediterranean Diet</h3>
                <p className="text-sm text-secondary mt-1">
                  Discover how this heart-healthy eating plan can improve your overall well-being.
                </p>
              </div>
              <div className="bg-background-accent p-4 rounded-lg">
                <h3 className="font-semibold text-primary">5 Simple Exercises for Better Posture</h3>
                <p className="text-sm text-secondary mt-1">
                  Learn easy techniques to improve your posture and reduce back pain.
                </p>
              </div>
              <div className="bg-background-accent p-4 rounded-lg">
                <h3 className="font-semibold text-primary">Understanding Sleep Cycles</h3>
                <p className="text-sm text-secondary mt-1">
                  Explore the science behind sleep stages and how to optimize your rest.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
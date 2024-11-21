"use client";

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { ShoppingBag } from 'lucide-react'

export function StoreTab() {
  const [cart, setCart] = useState<string[]>([])

  const addToCart = (productId: string) => {
    setCart(prev => [...prev, productId])
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5 text-primary" /> Health Store
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Card className="border border-secondary/20">
              <CardContent className="p-4">
                <div className="bg-background-accent w-full h-32 rounded-lg mb-2" />
                <h3 className="font-semibold text-primary">Organic Protein Powder</h3>
                <p className="text-sm text-secondary">$29.99</p>
                <Button className="w-full mt-2 bg-primary hover:bg-primary/90 text-white" onClick={() => addToCart('organic-protein-powder')}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card className="border border-secondary/20">
              <CardContent className="p-4">
                <div className="bg-background-accent w-full h-32 rounded-lg mb-2" />
                <h3 className="font-semibold text-primary">Yoga Mat</h3>
                <p className="text-sm text-secondary">$19.99</p>
                <Button className="w-full mt-2 bg-primary hover:bg-primary/90 text-white" onClick={() => addToCart('yoga-mat')}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Zap, DollarSign, Leaf } from "lucide-react";

const SolarCalculator = () => {
  const [monthlyBill, setMonthlyBill] = useState("");
  const [roofSize, setRoofSize] = useState("");
  const [results, setResults] = useState(null);

  const calculateSavings = () => {
    if (!monthlyBill || !roofSize) return;

    const bill = parseFloat(monthlyBill);
    const size = parseFloat(roofSize);
    
    // Simple calculation estimates (in real scenario, use more complex formulas)
    const systemSize = Math.min(size * 0.1, bill / 8); // kW
    const annualGeneration = systemSize * 1200; // kWh per year
    const monthlySavings = bill * 0.75; // Assume 75% reduction
    const annualSavings = monthlySavings * 12;
    const systemCost = systemSize * 65000; // ₹65,000 per kW
    const paybackPeriod = systemCost / annualSavings;
    const co2Reduction = annualGeneration * 0.82; // kg CO2 per year

    setResults({
      systemSize: systemSize.toFixed(1),
      monthlySavings: monthlySavings.toFixed(0),
      annualSavings: annualSavings.toFixed(0),
      systemCost: systemCost.toFixed(0),
      paybackPeriod: paybackPeriod.toFixed(1),
      co2Reduction: co2Reduction.toFixed(0),
    });
  };

  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-4xl font-bold mb-4 gradient-text-solar">
            Solar Savings Calculator
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how much you can save with solar energy. Get instant estimates for your home or business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Input */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Calculate Your Savings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="monthly-bill">Monthly Electricity Bill (₹)</Label>
                <Input
                  id="monthly-bill"
                  type="number"
                  placeholder="e.g., 5000"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(e.target.value)}
                  className="text-lg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="roof-size">Available Roof Area (sq ft)</Label>
                <Input
                  id="roof-size"
                  type="number"
                  placeholder="e.g., 800"
                  value={roofSize}
                  onChange={(e) => setRoofSize(e.target.value)}
                  className="text-lg"
                />
              </div>

              <Button 
                onClick={calculateSavings}
                variant="solar"
                size="lg"
                className="w-full shadow-solar"
                disabled={!monthlyBill || !roofSize}
              >
                <Calculator className="h-5 w-5 mr-2" />
                Calculate Savings
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          {results && (
            <Card className="shadow-eco fade-in-up">
              <CardHeader>
                <CardTitle className="gradient-text-eco">Your Solar Savings Potential</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-hero rounded-lg">
                    <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">System Size</p>
                    <p className="text-2xl font-bold text-primary">{results.systemSize} kW</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-hero rounded-lg">
                    <DollarSign className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Monthly Savings</p>
                    <p className="text-2xl font-bold text-secondary">₹{results.monthlySavings}</p>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Savings:</span>
                    <span className="font-bold text-secondary">₹{results.annualSavings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">System Cost:</span>
                    <span className="font-bold">₹{results.systemCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Payback Period:</span>
                    <span className="font-bold text-primary">{results.paybackPeriod} years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">CO₂ Reduction:</span>
                    <div className="flex items-center gap-1">
                      <Leaf className="h-4 w-4 text-secondary" />
                      <span className="font-bold text-secondary">{results.co2Reduction} kg/year</span>
                    </div>
                  </div>
                </div>

                <Button variant="eco" size="lg" className="w-full shadow-eco mt-4">
                  Get Detailed Quote
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default SolarCalculator;
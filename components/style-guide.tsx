import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function StyleGuide() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">CRM Design System</h1>
        <p className="text-muted-foreground">A comprehensive style guide for the CRM application</p>
      </div>

      {/* Typography */}
      <Card>
        <CardHeader>
          <CardTitle>Typography</CardTitle>
          <CardDescription>Text styles and hierarchy</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold">Heading 1</h1>
            <h2 className="text-3xl font-bold">Heading 2</h2>
            <h3 className="text-2xl font-bold">Heading 3</h3>
            <h4 className="text-xl font-semibold">Heading 4</h4>
            <p className="text-base">Body text - Regular paragraph text</p>
            <p className="text-sm text-muted-foreground">Small text - Secondary information</p>
          </div>
        </CardContent>
      </Card>

      {/* Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Color Palette</CardTitle>
          <CardDescription>Primary colors and semantic colors</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-16 bg-primary rounded-lg"></div>
              <p className="text-sm font-medium">Primary</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-secondary rounded-lg"></div>
              <p className="text-sm font-medium">Secondary</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-destructive rounded-lg"></div>
              <p className="text-sm font-medium">Destructive</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-muted rounded-lg"></div>
              <p className="text-sm font-medium">Muted</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Buttons */}
      <Card>
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
          <CardDescription>Button variants and states</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button disabled>Disabled</Button>
          </div>
        </CardContent>
      </Card>

      {/* Badges */}
      <Card>
        <CardHeader>
          <CardTitle>Badges</CardTitle>
          <CardDescription>Status indicators and labels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Form Elements */}
      <Card>
        <CardHeader>
          <CardTitle>Form Elements</CardTitle>
          <CardDescription>Input fields and form components</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="example">Label</Label>
            <Input id="example" placeholder="Placeholder text" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled">Disabled Input</Label>
            <Input id="disabled" placeholder="Disabled" disabled />
          </div>
        </CardContent>
      </Card>

      {/* Spacing */}
      <Card>
        <CardHeader>
          <CardTitle>Spacing System</CardTitle>
          <CardDescription>Consistent spacing scale</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-primary"></div>
              <span className="text-sm">4px - space-1</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-4 bg-primary"></div>
              <span className="text-sm">8px - space-2</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-4 bg-primary"></div>
              <span className="text-sm">12px - space-3</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-4 bg-primary"></div>
              <span className="text-sm">16px - space-4</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 h-4 bg-primary"></div>
              <span className="text-sm">24px - space-6</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 h-4 bg-primary"></div>
              <span className="text-sm">32px - space-8</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

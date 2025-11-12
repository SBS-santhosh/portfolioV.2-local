// if you some how create a new page in this site use this code for the css styles reference so you can adopte it easily

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const StyleGuide = () => {
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const styleCategories = [
    {
      title: "Section Containers",
      items: [
        {
          name: "Section Wrapper",
          code: 'className="py-24 px-4 relative"',
          description: "Standard section spacing"
        },
        {
          name: "Section with Background",
          code: 'className="py-24 px-4 relative bg-secondary/30"',
          description: "Section with subtle background"
        },
        {
          name: "Container",
          code: 'className="container mx-auto max-w-5xl"',
          description: "Main content container (max-width: 5xl)"
        },
        {
          name: "Wide Container",
          code: 'className="container mx-auto max-w-6xl"',
          description: "Wider content container"
        }
      ]
    },
    {
      title: "Typography",
      items: [
        {
          name: "Section Title",
          code: 'className="text-3xl md:text-4xl font-bold mb-12 text-center"',
          description: "Main section headings"
        },
        {
          name: "Title with Accent",
          code: '<h2>Text <span className="text-primary">Accent</span></h2>',
          description: "Highlight part of title"
        },
        {
          name: "Subsection Title",
          code: 'className="text-2xl font-semibold"',
          description: "Secondary headings"
        },
        {
          name: "Card Title",
          code: 'className="text-xl font-semibold mb-2"',
          description: "Card/item titles"
        },
        {
          name: "Muted Text",
          code: 'className="text-muted-foreground"',
          description: "Secondary text color"
        }
      ]
    },
    {
      title: "Buttons",
      items: [
        {
          name: "Primary Button (Cosmic)",
          code: 'className="cosmic-button"',
          description: "Main call-to-action button"
        },
        {
          name: "Primary Button with Icon",
          code: 'className="cosmic-button flex items-center gap-2"',
          description: "Button with icon spacing"
        },
        {
          name: "Outline Button",
          code: 'className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"',
          description: "Secondary action button"
        },
        {
          name: "Filter Button Active",
          code: 'className="px-5 py-2 rounded-full bg-primary text-primary-foreground shadow-md transition-colors duration-300"',
          description: "Active filter state"
        },
        {
          name: "Filter Button Inactive",
          code: 'className="px-5 py-2 rounded-full bg-secondary/70 text-foreground hover:bg-secondary transition-colors duration-300"',
          description: "Inactive filter state"
        }
      ]
    },
    {
      title: "Cards & Containers",
      items: [
        {
          name: "Card Base",
          code: 'className="bg-card rounded-lg overflow-hidden shadow-xs card-hover"',
          description: "Standard card with hover effect"
        },
        {
          name: "Gradient Border Card",
          code: 'className="gradient-border p-6 card-hover"',
          description: "Card with gradient border"
        },
        {
          name: "Card with Shadow",
          code: 'className="bg-card p-8 rounded-lg shadow-xs"',
          description: "Card with padding and shadow"
        },
        {
          name: "Simple Card",
          code: 'className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"',
          description: "Minimal card style"
        }
      ]
    },
    {
      title: "Layout Grids",
      items: [
        {
          name: "Two Column Grid",
          code: 'className="grid grid-cols-1 md:grid-cols-2 gap-12"',
          description: "Responsive 2-column layout"
        },
        {
          name: "Three Column Grid",
          code: 'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"',
          description: "Responsive 3-column layout"
        },
        {
          name: "Skills Grid",
          code: 'className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"',
          description: "Dense grid for small items"
        },
        {
          name: "Flex Row",
          code: 'className="flex flex-col sm:flex-row gap-4"',
          description: "Responsive flex container"
        }
      ]
    },
    {
      title: "Tags & Badges",
      items: [
        {
          name: "Tag/Badge",
          code: 'className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"',
          description: "Skill tag or category badge"
        },
        {
          name: "Primary Badge",
          code: 'className="bg-primary/10 text-primary px-2 py-1 rounded-full"',
          description: "Highlighted badge"
        }
      ]
    },
    {
      title: "Images",
      items: [
        {
          name: "Card Image",
          code: 'className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"',
          description: "Image with hover zoom effect"
        },
        {
          name: "Image Container",
          code: 'className="h-48 overflow-hidden"',
          description: "Fixed height image wrapper"
        },
        {
          name: "Aspect Ratio Image",
          code: 'className="aspect-video overflow-hidden"',
          description: "16:9 aspect ratio container"
        }
      ]
    },
    {
      title: "Icons & Decorations",
      items: [
        {
          name: "Icon Container",
          code: 'className="p-3 rounded-full bg-primary/10"',
          description: "Circular icon background"
        },
        {
          name: "Icon (with Lucide)",
          code: '<Icon className="h-6 w-6 text-primary" />',
          description: "Standard icon sizing"
        }
      ]
    },
    {
      title: "Forms",
      items: [
        {
          name: "Input Field",
          code: 'className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"',
          description: "Standard text input"
        },
        {
          name: "Textarea",
          code: 'className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"',
          description: "Textarea without resize"
        },
        {
          name: "Label",
          code: 'className="block text-sm font-medium mb-2"',
          description: "Form label"
        }
      ]
    },
    {
      title: "Links & Hover States",
      items: [
        {
          name: "Text Link",
          code: 'className="text-muted-foreground hover:text-primary transition-colors"',
          description: "Basic text link"
        },
        {
          name: "Nav Link",
          code: 'className="hover:text-primary transition-colors"',
          description: "Navigation link"
        },
        {
          name: "Icon Link",
          code: 'className="text-foreground/80 hover:text-primary transition-colors duration-300"',
          description: "Icon as link"
        }
      ]
    },
    {
      title: "Spacing Utilities",
      items: [
        {
          name: "Vertical Stack",
          code: 'className="space-y-6"',
          description: "Stack items vertically (24px gap)"
        },
        {
          name: "Horizontal Stack",
          code: 'className="flex space-x-4"',
          description: "Stack items horizontally (16px gap)"
        },
        {
          name: "Wrap Stack",
          code: 'className="flex flex-wrap gap-2"',
          description: "Wrapping flex container"
        }
      ]
    },
    {
      title: "Animations (Tailwind Config Required)",
      items: [
        {
          name: "Fade In",
          code: 'className="opacity-0 animate-fade-in"',
          description: "Fade in animation"
        },
        {
          name: "Fade In Delayed",
          code: 'className="opacity-0 animate-fade-in-delay-1"',
          description: "Staggered fade in (variants: 1-4)"
        },
        {
          name: "Bounce",
          code: 'className="animate-bounce"',
          description: "Bounce animation"
        },
        {
          name: "Pulse Subtle",
          code: 'className="animate-pulse-subtle"',
          description: "Subtle pulse (for stars)"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Portfolio <span className="text-primary">Style Guide</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reusable styling patterns extracted from your portfolio components. 
            Click any code snippet to copy it to your clipboard.
          </p>
        </div>

        <div className="space-y-12">
          {styleCategories.map((category, idx) => (
            <div key={idx} className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-primary">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, itemIdx) => {
                  const itemId = `${idx}-${itemIdx}`;
                  return (
                    <div 
                      key={itemIdx}
                      className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {item.description}
                          </p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(item.code, itemId)}
                          className="ml-4 p-2 rounded-md hover:bg-primary/10 transition-colors"
                          title="Copy to clipboard"
                        >
                          {copiedId === itemId ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <Copy className="h-5 w-5 text-muted-foreground" />
                          )}
                        </button>
                      </div>
                      <pre className="bg-secondary/50 p-3 rounded-md overflow-x-auto text-sm">
                        <code>{item.code}</code>
                      </pre>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Custom CSS Classes
          </h2>
          <p className="text-muted-foreground mb-4">
            These custom classes are used in your components. Make sure they're defined in your global CSS:
          </p>
          <pre className="bg-secondary/50 p-4 rounded-md overflow-x-auto text-sm">
            <code>{`.cosmic-button {
  /* Your cosmic button styles */
}

.gradient-border {
  /* Your gradient border styles */
}

.card-hover {
  /* Card hover animation styles */
}

.text-gradient {
  /* Text gradient styles */
}

.star {
  /* Star background styles */
}

.meteor {
  /* Meteor animation styles */
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
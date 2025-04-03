
import React from 'react';
import { eras } from '../data/antiques';
import { Bookmark, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const History = () => {
  return (
    <div className="min-h-screen parchment-bg">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-antique font-bold mb-6 text-center">History of Antiques</h1>
        <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto bg-card shadow-lg rounded-lg overflow-hidden mb-12">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-antique font-bold mb-4">The Fascination with Antiques</h2>
            <p className="text-muted-foreground mb-6">
              The appreciation for antiques transcends mere collection; it represents our connection to history, 
              craftsmanship, and the stories of those who came before us. Each piece in our collection carries 
              not just aesthetic or monetary value, but a tangible link to the past—a witness to history unfolding.
            </p>
            <p className="text-muted-foreground">
              Our curation focuses on pieces that exemplify exceptional craftsmanship, historical significance, 
              and the distinctive characteristics of their era. We believe that understanding the context in which 
              these pieces were created enhances appreciation for their beauty and importance.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-antique font-bold mb-6">Historical Eras</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {eras.map((era) => (
            <div key={era} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-antique font-semibold mb-3 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  {era} Era
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {getEraDescription(era)}
                </p>
                <Link 
                  to={`/collection?era=${era}`} 
                  className="text-primary hover:underline inline-flex items-center text-sm"
                >
                  View {era} pieces
                  <Bookmark className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-antique font-bold mb-4">Geographical Influences</h2>
          <p className="text-muted-foreground mb-6">
            The origin of an antique significantly influences its design, materials, and craftsmanship. 
            Different regions developed their own distinctive styles, techniques, and artistic traditions 
            that are reflected in the antiques they produced.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">European Traditions</h3>
                <p className="text-sm text-muted-foreground">
                  From French Rococo to English Georgian, European antiques reflect the evolving tastes 
                  of aristocracy and royalty with emphasis on ornate details and luxurious materials.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Asian Mastery</h3>
                <p className="text-sm text-muted-foreground">
                  Asian antiques showcase exceptional craftsmanship in porcelain, jade, lacquer, 
                  and bronze, with designs that often carry symbolic meaning and spiritual significance.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">American Heritage</h3>
                <p className="text-sm text-muted-foreground">
                  American antiques blend European influences with pragmatic design, showcasing 
                  regional distinctions from New England simplicity to Southern elegance.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">African & Middle Eastern Art</h3>
                <p className="text-sm text-muted-foreground">
                  These regions produced pieces with strong geometric patterns, vibrant colors, 
                  and spiritual significance, often crafted from indigenous materials.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            to="/collection"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors"
          >
            Explore Our Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

// Helper function to get era descriptions
const getEraDescription = (era: string): string => {
  switch(era) {
    case 'Renaissance':
      return 'The Renaissance (14th-17th century) revived classical forms and celebrated humanism, with pieces characterized by symmetry, proportion, and classical motifs.';
    case 'Baroque':
      return 'The Baroque period (17th-18th century) featured dramatic, elaborate designs with rich ornamentation, curved forms, and a sense of movement and grandeur.';
    case 'Victorian':
      return 'Victorian pieces (1837-1901) reflect the eclectic tastes of the era, with ornate details, dark woods, and revival styles inspired by earlier periods.';
    case 'Art Deco':
      return 'Art Deco (1920s-1930s) embraced modernity with bold geometric forms, vibrant colors, exotic materials, and sleek, stylized designs.';
    case 'Medieval':
      return 'Medieval antiques (5th-15th century) show religious influences, guild craftsmanship, and functional designs with symbolic ornamentation.';
    case 'Ancient':
      return 'Ancient artifacts from civilizations like Egypt, Greece, Rome, and China display remarkable craftsmanship and materials with historical significance.';
    case 'Modern':
      return 'Modern antiques (late 19th-mid 20th century) include Art Nouveau, Arts & Crafts, and Mid-Century pieces that broke from traditional styles.';
    default:
      return 'A distinctive period in art and design history with its own characteristic styles and innovations.';
  }
};

export default History;

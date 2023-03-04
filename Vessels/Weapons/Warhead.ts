
class warhead extends Vessel {
    tonnage: number
    

      
        explode(explosionPoint: { x: number; y: number }, radius: number, ships: Ship[]) {
          // create a quadtree to optimize ship lookups
          const quadtree = new QuadTree({
            x: 0,
            y: 0,
            width: 1000, // change this to match your game world size
            height: 1000,
          });
      
          // add ships to the quadtree
          for (const ship of ships) {
            quadtree.insert(ship.physics);
          }
      
          // get ships within the explosion radius
          const nearbyShips = quadtree.queryCircle(explosionPoint.x, explosionPoint.y, radius);
      
          // set isSinking to true for nearby ships
          for (const ship of nearbyShips) {
            const distance = Math.sqrt(
              (ship.x - explosionPoint.x) ** 2 + (ship.y - explosionPoint.y) ** 2
            );
            if (distance <= radius) {
              ship.isSinking = true;
            }
          }
        }
      }
      
}
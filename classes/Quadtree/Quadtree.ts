// QuadTree class used to optimize the search for nearby ships
class QuadTree {
    boundary: ;
    capacity: number;
    points: Ship[];
    divided: boolean;
    northWest: QuadTree | null;
    northEast: QuadTree | null;
    southWest: QuadTree | null;
    southEast: QuadTree | null;
  
    constructor(boundary: , capacity: number) {
      this.boundary = boundary;
      this.capacity = capacity;
      this.points = [];
      this.divided = false;
      this.northWest = null;
      this.northEast = null;
      this.southWest = null;
      this.southEast = null;
    }
  
    subdivide() {
      const x = this.boundary.x;
      const y = this.boundary.y;
      const w = this.boundary.width / 2;
      const h = this.boundary.height / 2;
  
      const nw = new Physics(x - w / 2, y - h / 2, 0, 0);
      const ne = new Physics(x + w / 2, y - h / 2, 0, 0);
      const sw = new Physics(x - w / 2, y + h / 2, 0, 0);
      const se = new Physics(x + w / 2, y + h / 2, 0, 0);
  
      this.northWest = new QuadTree(nw, this.capacity);
      this.northEast = new QuadTree(ne, this.capacity);
      this.southWest = new QuadTree(sw, this.capacity);
      this.southEast = new QuadTree(se, this.capacity);
  
      this.divided = true;
    }
  
    insert(ship: Ship) {
      if (!this.boundary.contains(ship.physics)) {
        return false;
      }
  
      if (this.points.length < this.capacity) {
        this.points.push(ship);
        return true;
      } else {
        if (!this.divided) {
          this.subdivide();
        }
  
        if (this.northWest!.insert(ship)) return true;
        if (this.northEast!.insert(ship)) return true;
        if (this.southWest!.insert(ship)) return true;
        if (this.southEast!.insert(ship)) return true;
      }
  
      return false;
    }
  
    queryRange(range: Physics) {
      const shipsInRange: Ship[] = [];
  
      if (!this.boundary.intersects(range)) {
        return shipsInRange;
      }
  
      for (const ship of this.points) {
        if (range.contains(ship.physics)) {
          shipsInRange.push(ship);
        }
      }
  
      if (this.divided) {
        shipsInRange.push(...this.northWest!.queryRange(range));
        shipsInRange.push(...this.northEast!.queryRange(range));
        shipsInRange.push(...this.southWest!.queryRange(range));
        shipsInRange.push(...this.southEast!.queryRange(range));
      }
  
      return shipsInRange;
    }
  }
  

  
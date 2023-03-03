import Vessel from '../Vessel'
import depth from '../../classes/depth'
class Submarine {
    vessel: Vessel
    depth: depth


    setDepth(depth: depth) {    
        if(depth  === "air") {
            throw new Error("Submarines cannot fly")
        }
        this.depth = depth
        }        
    }

    
}
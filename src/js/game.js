export default function health(params) {
    if (params.health < 15) {
       return 'critical';
    } 
    if (params.health > 50) {
        return 'healthy';
    } else {
        return 'wounded';
    }
}

export default function health(params) {
    return params.sort((a,b) => b.health - a.health)
}

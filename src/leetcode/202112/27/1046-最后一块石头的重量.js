var lastStoneWeight = function(stones) {
    if (stones.length === 0) return 0
    if (stones.length === 1) return stones[0]
    stones.sort((a,b) => b - a)
    let y = stones[0]
    let x = stones[1]
    if (y === x) stones.splice(0, 2)
    if (y > x) {
        stones.splice(1, 1)
        stones[0] = y - x
    }
    return lastStoneWeight(stones)
};

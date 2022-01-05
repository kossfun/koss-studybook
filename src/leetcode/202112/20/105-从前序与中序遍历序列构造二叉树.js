var buildTree = function(preorder, inorder) {
    let map = new Map();
    for(let i = 0; i < inorder.length; i++){
        map.set(inorder[i],i)
    }
    const helper = function(pStart, pEnd, iStart, iEnd){
        // 判断我们的前序遍历数组已经使用完毕
        if(pStart > pEnd) return null;
        // 获取根节点的值
        let rootVal = preorder[pStart];
        // 构造一个根节点
        let root = new TreeNode(rootVal);
        // 获取根节点在终须遍历数组中的索引位置，来分隔左右子树
        let mid = map.get(rootVal);
        // 计算左子树的节点个数，用来在前序遍历数组确定左子树结束的位置
        let leftNum = mid - iStart;
        // 递归的构建左子树
        root.left = helper(pStart + 1, pStart + leftNum, iStart,mid -1);
         // 递归的构建右子树
        root.right = helper(pStart + leftNum + 1, pEnd, mid + 1 , iEnd);
        return root;
    }
    return helper(0 , preorder.length -1, 0, inorder.length -1)
};


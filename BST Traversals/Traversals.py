def preorder (root):
    if root is not None:
        print(root.data, end=' ')
        preorder(root.left)
        preorder(root.right)
    else :
        return

def inorder (root):
    if root is not None:
        inorder(root.left)
        print(root.data, end=' ')
        inorder(root.right)
    else :
        return

def postorder (root):
    if root is not None:
        postorder(root.left)
        postorder(root.right)
        print(root.data, end=' ')
    else :
        return

def levelorder (root):
    if root is not None:
        queue = [root]
        while queue:
            node = queue.pop(0)
            print(node.data, end=' ')
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
    else :
        return

def height (root):
    if root is not None:
        return 1 + max(height(root.left), height(root.right))
    else :
        return -1

def size (root):
    if root is not None:
        return 1 + size(root.left) + size(root.right)
    else :
        return 0

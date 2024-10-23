#include <stdio.h>
#include <stdlib.h>


struct treeNode {
    int value;
    struct treeNode* left;
    struct treeNode* right;
};


struct treeNode* createNode(int value) {
    struct treeNode* newNode = (struct treeNode*)malloc(sizeof(struct treeNode));
    newNode->value = value;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}


struct treeNode* insert(struct treeNode* root, int value) {
    if (root == NULL) { // if tree is empty
        return createNode(value);
    }


    if (root->value > value) {
        root->left = insert(root->left, value);
    } else {
        root->right = insert(root->right, value);
    }
    return root;
}


void preOrder(struct treeNode* root) {
    if (root != NULL) {
        printf("%d ", root->value);
        preOrder(root->left);
        preOrder(root->right);
    }
}


void inOrder(struct treeNode* root) {
    if (root != NULL) {
        inOrder(root->left);
        printf("%d ", root->value);
        inOrder(root->right);
    }
}


void postOrder(struct treeNode* root) {
    if (root != NULL) {
        postOrder(root->left);
        postOrder(root->right);
        printf("%d ", root->value);
    }
}


struct treeNode* newTree() {
    struct treeNode* root = NULL;
    int n;
    printf("Enter size of array: ");
    scanf("%d", &n);
    int Arr[n];
    for (int i = 0; i < n; i++) {
        printf("Enter value for Arr[%d]: ", i);
        scanf("%d", &Arr[i]);
        root = insert(root, Arr[i]);
    }
    return root;
}


int main() {
    struct treeNode* root = NULL;
    int x = 1;


    while (x) {
        printf("Enter '1' for generating a new tree, '2' for preOrder, '3' for inOrder, '4' for postOrder, or '0' to exit: ");
        scanf("%d", &x);


        if (x == 1) {
            root = newTree();
        } else if (x == 2) {
            printf("The given tree in preOrder is: ");
            preOrder(root);
            printf("\n");
        } else if (x == 3) {
            printf("The given tree in inOrder is: ");
            inOrder(root);
            printf("\n");
        } else if (x == 4) {
            printf("The given tree in postOrder is: ");
            postOrder(root);
            printf("\n");
        } else if (x == 0) {
            printf("Exiting...");
            break;
        } else {
            printf("Invalid input, please try again.\n");
        }
    }


    return 0;
}

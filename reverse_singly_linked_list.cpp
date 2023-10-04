#include<iostream>
using namespace std;

struct node{
    int data;
    node *next = NULL;
};

struct node *head = NULL;

void createNode(int n)
{
    struct node *new_node = new node;
    new_node->data = n;
    new_node->next = head;
    head = new_node;
}

int display()
{
    struct node *temp = head;
    while(temp != NULL)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }
}

int main()
{
    int size;
    cin >> size;

    for(int i = 0 ; i < size ; i++)
    {
        int temp;
        cin >> temp;
        createNode(temp);
    }
    display();
}
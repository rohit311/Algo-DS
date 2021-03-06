class Node {
	constructor(element){
  	this.element = element;
    this.next = null;
  
  }
}

class LinkedList{
	constructor(element){
  	this.head = element;
    this.size = 0;
  }
  
  addAtEnd(element){
  	if(this.head == null){
    	this.head = element;
    }
    else{
    	let currentNode = this.head;
      
      while(currentNode.next){
      	currentNode = currentNode.next;
      }
      
      currentNode.next = element;
    }
    this.size = this.size + 1;
  }
  
  addAtStart(element){
  	if(this.head == null){
    	this.head = element;
    }
    else{
    	element.next = this.head;
      this.head = element;
    }
  	this.size = this.size + 1;
  }
  
  count(num){
  	let cnt = 0;
    if(this.head == null){
    	cnt = 0;
    }
    else {
    	let currentNode = this.head;
    	while(currentNode){
      	if(currentNode.element == num)
        	cnt = cnt+1;	
          
        currentNode = currentNode.next;
      }
    }
    
    return cnt;
  
  }
  
  getNth(index){
  	
  	if(index <0 || index >= this.size){
    	throw Error('Index out of bounds');
    }
    else{
    	let cnt = 0;
    	let currentNode = this.head;
      while(currentNode){
      	if(cnt == index){
        	return currentNode.element;
        }
        cnt = cnt+1;		
          
        currentNode = currentNode.next;
      }
    }
  }
  
  pop(){
  	if(this.head == null){
    	throw new Error('Linked list is empty');
    }
    else{
    	let currentNode = this.head;
      this.head = this.head.next;
      return currentNode.element;
    
    }
  
  }
  
  frontBackSplit(){
  	if(this.head == null){
    	throw new Error('Linked list is empty');
    }
    else{
    	let slowPointer = this.head;
        let fastPointer = this.head.next;
        while(fastPointer){
      	  fastPointer = fastPointer.next;
        
          if(fastPointer != null){
        	slowPointer = slowPointer.next;
        	fastPointer = fastPointer.next;
          }      	
        }
    }
  }
  
  removeDuplicates(){
  	if(this.head == null){
    	throw new Error('Linked list is empty');
    }
    else{
	  let slowPointer = this.head;
      let fastPointer = this.head.next;
      let previousValue = this.head.element;
      
      while(fastPointer != null){
      	
        
        if(previousValue == currrentNode.element){
		  slowPointer.next = fastPointer;
        }
		else{
		  previousValue = fastPointer.element;					
		}
		
		slowPointer = slowPointer.next;
		fastPointer = fastPointer.next;
      }
    }
  
  }
  
 static alternatingSplit(sourceList){
 		let headNode1 = new Node();
    let headNode2 = new Node();
  	let list1 = new LinkedList(headNode1);
  	let list2 = new LinkedList(headNode2);
    let currentNode = sourceList;
    
    while(currentNode != null){
    	LinkedList.moveNodes(list1,currentNode);
      
      if(currentNode != null){
      	LinkedList.moveNodes(list2,currentNode);
      }
    
    }
    
    list1.displayNodes();
    list2.displayNodes();
    
  }
  
  static moveNodes(firstList,secondList){
  	if(!secondList){
    	throw new Error('List(s) is(are) empty !');
    
    }
    else{
    	let nodeToBeAdded = secondList.head;
      let firstListHead = firstList.head;
      secondList.head = secondList.head.next;
      nodeToBeAdded.next = firstList.head;
      firstList.head = nodeToBeAdded; 
    
    }
  
  }
  
  displayNodes(){
  	let currentNode = this.head;
      
      while(currentNode){
      	console.log('Node '+currentNode.element);
        currentNode = currentNode.next;
      }
  	
  }
}

let headNode = new Node(3);
let list1 = new LinkedList(headNode);
list1.addAtEnd(new Node(4));
list1.addAtEnd(new Node(5));
list1.addAtEnd(new Node(6));
list1.addAtStart(new Node(12));
LinkedList.alternatingSplit(list1);
//list2.displayNodes();

class Graph{
    constructor(){
        this.adjacencyList={}
    }
    addVertex(vertex){//정점 추가 메서드
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]=[];
    }
}
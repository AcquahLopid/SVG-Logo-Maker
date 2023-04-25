class Shape{
    chosenColor(color){
        this.color = color; //grabs text color chosen
    }
    render(){
        throw new Error('hi');
    }
}
module.exports = Shape;
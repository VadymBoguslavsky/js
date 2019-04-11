import React, {Component, PureComponent} from 'react'

class Article extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.incrementCounter = incrementCounter.bind(this)
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     return this.state.isOpen !== nextState.isOpen
    // }
    componentWillMount(){
        console.log('-------mount')
    }

    render(){
        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen && <section className = "card-text">{article.text}</section>
        return (
            <div className = 'card mx-auto' style = {{width : '90%'}}>
                <div className = 'card-header'>
                    <h2 onClick = {this.incrementCounter}>   
                        {article.title}
                        clicked {this.state.count}
                        <button onClick={onButtonClick} className = "btn btn-primary btn-lg float-right">
                            {isOpen ? "close" : "open"}
                        </button>
                    </h2>
                </div>
                <div className = 'card-body'>
                    <h3 className = 'card-subtitle text-muted'>
                        creation date: {(new Date(article.date).toDateString())}
                    </h3>
                    {body}
                </div>
            </div>
        )
    }
}
function incrementCounter(){
    this.setState({
        count: this.state.count + 1
    })
}

export default Article
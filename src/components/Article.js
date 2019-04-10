import React, {Component} from 'react'

class Article extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isOpen: props.defaultOpen
        }
        this.handleClick = handleClick.bind(this)
    }

    componentWillMount(){
        console.log('-------mount')
    }

    render(){
        const {article} = this.props
        const body = this.state.isOpen && <section className = "card-text">{article.text}</section>
        return (
            <div className = 'card mx-auto' style = {{width : '60%'}}>
                <div className = 'card-header'>
                    <h2>   {article.title}
                        <button onClick={this.handleClick} className = "btn btn-primary btn-lg float-right">
                            {this.state.isOpen ? "close" : "open"}
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
function handleClick (){
    console.log('-----clicked')
    this.setState({
        isOpen: !this.state.isOpen
    })
}
export default Article
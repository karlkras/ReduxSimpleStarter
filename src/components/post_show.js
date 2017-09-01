import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from "../actions";
import { Link } from 'react-router-dom';


class ShowPost extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/posts');
        });
    }

    render() {
        const { post } = this.props;
        if(! post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/posts">
                    &lt; Back to Index
                </Link>
                <button
                    className="btn btn-danger float-right"
                    onClick={this.onDeleteClick.bind(this)}

                    >
                    Delete Post
                </button>
                <div>
                    <h3>{ post.title }</h3>
                    <h6>Categories: {post.categories}</h6>
                    <p>{post.content}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    const { id } = ownProps.match.params;
    return { post: posts[id]};
}


export default connect(mapStateToProps, { fetchPost, deletePost }) (ShowPost);
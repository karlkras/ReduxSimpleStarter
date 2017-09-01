import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addPost } from "../actions";
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';


class PostNew extends Component {


    renderTextField(field) {
        const { meta: { touched, error } } = field;
        const { placeholder, label} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                    placeholder={placeholder}
                />
                <div className="text-danger">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }
    renderTextAreaField(field) {
        const { meta: { touched, error } } = field;
        const { placeholder, label} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <textarea
                    className="form-control has-danger"
                    {...field.input}
                    placeholder={placeholder}
                />
                <div className="text-danger">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values){
        this.props.addPost(values, () => {
            this.props.history.push('/posts');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Title:"
                        placeholder="Enter title"
                        name="title"
                        component={
                            this.renderTextField
                        }
                    />
                    <Field
                        label="Categories:"
                        placeholder="Enter categories"
                        name="categories"
                        component={
                            this.renderTextField
                        }
                    />
                    <Field
                        label="Post Content:"
                        placeholder="Enter content"
                        name="content"
                        component={
                            this.renderTextAreaField
                        }
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link className="btn btn-danger" to="/posts">
                        Cancel
                    </Link>
                </form>
            </div>
        );
    }
}



function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = "Enter a title";
    }
    if(!values.categories) {
        errors.categories = "Enter at least one category";
    }
    if(!values.content) {
        errors.content = "Enter some content";
    }


    return errors;

}

export default reduxForm({
    validate : validate,
    form: 'PostNewForm'
})(
    connect(null, {addPost}) (PostNew)
);
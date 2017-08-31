import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions/index"
import _ from 'lodash';
import { Field, reduxForm} from 'redux-form';


class PostNew extends Component {


    renderTextField(field) {

        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control has-danger"
                    type="text"
                    {...field.input}
                    placeholder={field.placeholder}
                />
                <div className="text-help">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }
    renderTextAreaField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <textarea
                    className="form-control has-danger"
                    {...field.input}
                    placeholder={field.placeholder}
                />
                <div className="text-help">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values){
        console.log(values);
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
    validate,
    form: 'PostNewForm'
})(PostNew);
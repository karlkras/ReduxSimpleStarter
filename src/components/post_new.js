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
                    className="form-control"
                    type="text"
                    {...field.input}
                    placeholder={field.placeholder}
                />
            </div>
        );
    }
    renderTextAreaField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <textarea
                    className="form-control"
                    {...field.input}
                    placeholder={field.placeholder}
                />
            </div>
        );
    }

    render() {
        return (
            <div>
                <form>
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
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'PostNewForm'
})(PostNew);
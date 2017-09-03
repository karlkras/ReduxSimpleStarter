import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';


describe('CommentList component tests', () => {
    let component;
    const props = {comments: ['One comment', 'Two comment', 'Three comment']};
    
    beforeEach(() => {
        component = renderComponent(CommentList, null, props); 
    });
    
    it('should show and LI for each comment', () => {
        expect(component.find('li').length).to.equal(props.comments.length);
    });
    
    it('should show each comment is provided', () => {
        props.comments.forEach((comment,i ) => {
             expect(component).to.contain(comment);
        });
       
    });    
    
    
});
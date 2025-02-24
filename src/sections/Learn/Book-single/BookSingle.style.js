import styled from "styled-components";

const BookSinglePageWrapper = styled.div`
  
	.backBtn {
		position: relative;
		left: 0px;
		margin-top: 3rem;
		margin-left: 3rem;
		font-weight: 600;
		a{
			display: flex;
		    color: ${props => props.theme.primaryColor};
		    &:hover{
		        color: ${props => props.theme.linkColor};
			}
			
			h4 {
				line-height: 1.75rem;
			}
			svg {
				font-size: 1.75rem;
			}
		}
		
	}
    .single-post-wrapper{
        margin: 2rem 0;
    }
`;

export default BookSinglePageWrapper;

import { Circle, Container, Row, Column, Category } from "./style";

const Categories = (data) => {
    function validateAmount(x) {
        if (x == 0) {
            return <p>No Resources</p>
        }
        else if (x > 0) {
            return <p>{x} Resources</p>
        }
    }

    return (
        <Row>
            {data.data.map((item, index) => {
                return (
                    <>
                    <Container key={index}>
                        <Circle color={item.color}/>
                        <Column>
                            <Category>{item.category}</Category>
                            {validateAmount(item.amount)}
                        </Column>
                    </Container>
                    </>
                )
            })}
        </Row>
    );
}
 
export default Categories;
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {plusCount,changeAge} from "./../store.js"

function Cart() {

    let state = useSelector((state) => { return state })
    let cart = useSelector((state) => state.cart)
    let dispatch = useDispatch()

    return (
        <div>
            <h6>{state.user.name} {state.user.age}의 장바구니
                <button onClick={()=>{dispatch(changeAge())}}>+</button>
            </h6>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((a, i) =>
                            <tr key={i}>
                                <td>{cart[i].id}</td>
                                <td>{cart[i].name}</td>
                                <td>{cart[i].count}</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(plusCount(cart[i].id))
                                    }}>
                                        +
                                    </button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
            
        </div>
    )
}

export default Cart
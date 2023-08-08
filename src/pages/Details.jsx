import React from 'react'
import { useSelector } from 'react-redux'

const Details = () => {

    const { todos } = useSelector(state => state.store)

    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-10">

                    {
                        todos.map((item, i) =>
                            <div class="card">
                                <div class="card-header">{item[i].name}</div>
                                <div class="card-body">{item[i].hero}</div>
                                <div class="card-footer">{item[i].desc}</div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>

    </>
}

export default Details
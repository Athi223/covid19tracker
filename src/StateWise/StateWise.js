import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from 'recharts'
import './StateWise.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { states } from '../States'

export default function StateWise(props) {
	const colors = [
		{ backgroundColor: '#fd7e1444', color: '#fd7e14' },
		{ backgroundColor: '#007bff44', color: '#007bff' },
		{ backgroundColor: '#dc354544', color: '#dc3545' },
		{ backgroundColor: '#28a74544', color: '#28a745' },
		{ backgroundColor: '#6610f244', color: '#6610f2' },
	]
    return(
        <div style={{ height: "85vh", width:"100vw" }}>
			<div className="container p-2 my-1 justify-content-between d-flex">
				<div className="cases-type p-2" style={colors[0]} onClick={() => props.setType(0)}>Confirmed</div>
				<div className="cases-type p-2" style={colors[1]} onClick={() => props.setType(1)}>Active</div>
				<div className="cases-type p-2" style={colors[2]} onClick={() => props.setType(2)}>Deceased</div>
				<div className="cases-type p-2" style={colors[3]} onClick={() => props.setType(3)}>Recovered</div>
				<div className="cases-type p-2" style={colors[4]} onClick={() => props.setType(4)}>Tested</div>
			</div>
			<ResponsiveContainer>
				<BarChart data={props.states} margin={{ left: 20, right: 20 }} >
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="state" />
					<YAxis />
					<Tooltip labelFormatter={(stateid) => states[stateid]} />
					<Bar
						dataKey={['confirmed', 'active', 'deceased', 'recovered', 'tested'][props.type]}
						fill={colors[props.type].color}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
    )
}
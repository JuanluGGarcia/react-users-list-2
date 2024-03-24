import { StyledFilterContainer } from './styles';

const Filters = () => {
	return (
		<StyledFilterContainer>
			<input type='text' name='name' id='name' />

			<div>
				<label htmlFor='active'>Sólo activos</label>
				<input type='checkbox' name='active' id='active' />
			</div>

			<select>
				<option value='0'>Por defecto</option>
				<option value='1'>Por nombre</option>
			</select>
		</StyledFilterContainer>
	);
};

export default Filters;

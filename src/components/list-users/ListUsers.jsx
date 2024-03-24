import Filters from '../filters/Filters';
import Header from '../header/Header';
import Users from '../users/Users';
import { StyledWrapper } from './styles';

const ListUsers = () => {
	return (
		<StyledWrapper>
			<Header />
            <Filters />
            <Users />
		</StyledWrapper>
	);
};

export default ListUsers;

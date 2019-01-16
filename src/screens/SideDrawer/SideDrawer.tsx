import * as React from 'react';
import { Text, View, Platform, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import { toggleDrawer } from '../../store/actions/index';

export interface SideDrawerProps {
  onDrawerToggle: (value: boolean) => void;
}
interface ThemedStyledProps {
  height: number;
}

const Container = styled(View)`
  background-color: white;
  height: 100%;
  flex: 1;
`;

const TopBar = styled(View)`
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  /* height: ${(props: ThemedStyledProps) => props.height}%; */
  height:  ${Platform.OS === 'ios' ? '89px' : '56px'};
`;

const MenuButton = styled(View)`
  height: 56px;
  width: ${Platform.OS === 'ios' ? '75%' : '100%'};
  display: flex;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  flex-direction: row;
  padding-left: 10px;
  padding-right: 10px;
`;

const IconWrap = styled(View)`
  align-self: flex-end;
  justify-content: center;
  height: 100%;
  margin-left: auto;
`;

class SideDrawer extends React.Component<SideDrawerProps, any> {
  constructor(props: any) {
    super(props);
    Navigation.events().bindComponent(this);
  }
  state = {
    statusBarHeight: 0
  };
  async componentDidMount() {
    const constants = await Navigation.constants();
    const statusBarHeight = constants.statusBarHeight;
    this.setState({
      statusBarHeight: statusBarHeight
    });
  }
  componentDidAppear() {
    this.props.onDrawerToggle(true);
  }
  componentDidDisappear() {
    this.props.onDrawerToggle(false);
  }
  public render() {
    return (
      <Container>
        <TopBar height={this.state.statusBarHeight} />
        <TouchableOpacity>
          <MenuButton>
            <Text>Sign Out</Text>
            <IconWrap>
              <Icon size={30} name="ios-log-out" color="grey" />
            </IconWrap>
          </MenuButton>
        </TouchableOpacity>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onDrawerToggle: (value: boolean) => dispatch(toggleDrawer(value))
});

export default connect(
  null,
  mapDispatchToProps
)(SideDrawer);

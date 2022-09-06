import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Tasks from '../../pages/task/task';
import NotFound from '../NotFound/NotFound';
import Root from '../../routes/Root';
import Projects from "../../pages/project/project";
import { MainContent, Content} from './MainViewCss';

const MainView: React.FC = () => {
    const { path } = useRouteMatch();
    return (
        <MainContent>
            <Content>
                <Switch>
                    <Route exact path={path} component={NotFound}></Route>
                    <Root
                        path={`${path}/home`}
                        component={NotFound}
                        exact={false}
                    />
                    <Root
                        path={`${path}/main/tasks`}
                        component={Tasks}
                        exact={false}
                    />
                    <Root
                        path={`${path}/main/projects`}
                        component={Projects}
                        exact={false}
                    />
                </Switch>
            </Content>
        </MainContent>
    );
};

export default MainView;



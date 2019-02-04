import React from 'react'
import { connect } from 'react-redux'
import './page.css'

import PageHeader from './components/PageHeader';
import PageAbstract from './components/PageAbstract'
import FieldView from '../fields/FieldView';

class PageView extends React.Component {
    render() {
        const { pageRepo, pageKey } = this.props
        const pageInfo = pageRepo[pageKey] || {}

        return (
            <div className="page">
                <PageHeader {...this.props}/>
                <div className="page-content">
                    <PageAbstract
                        {...this.props}
                        pageInfo={pageInfo}
                    />
                    <FieldView
                        {...this.props}
                        pageInfo={pageInfo}
                    />
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        pageRepo: state.page.pageRepo,
    })
)(PageView)
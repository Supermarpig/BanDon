// AxiosComponent.tsx
import React, { Component } from 'react';
import axios, { AxiosResponse } from 'axios';

interface AxiosComponentProps {
    url: string;
    render: (data: any) => React.ReactNode;
}

interface AxiosComponentState {
    data: any;
    loading: boolean;
    error: Error | null;
}

class AxiosComponent extends Component<AxiosComponentProps, AxiosComponentState> {
    constructor(props: AxiosComponentProps) {
        super(props);
        this.state = {
            data: null,
            loading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ loading: true });

        axios
            .get(this.props.url)
            .then((response: AxiosResponse) => {
                this.setState({ data: response.data.records.location, loading: false });
                console.log(response.data,"-------------------")
                console.log("11111111111",response.data.records.location)
            })
            .catch((error: Error) => {
                this.setState({ error, loading: false });
            });
    }

    render() {
        const { data, loading, error } = this.state;

        if (loading) {
            return <div>載入中...</div>;
        }

        if (error) {
            return <div>出現錯誤: {error.message}</div>;
        }

        if (!data) {
            return null; // 或者返回一个占位符
        }

        // if ( !data?.result?.records || !Array.isArray(data.records.location)) {
        //     return <div>數據格式不正確。</div>;
        // }
    }
}

export default AxiosComponent;

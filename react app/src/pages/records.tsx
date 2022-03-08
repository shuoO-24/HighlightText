import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { BSAEURL } from ".";

const Records: React.FC = () => {

    const [dataSource, setDataSource] = useState([])
    const [loading, setLoading] = useState(true)
    const handleData = async () => {
        const url = `${BSAEURL}/api/records/`
        const { data: { data } } = await axios(url)
        const list = JSON.parse(data).map(((item: any) => item.fields))
        setDataSource(list)
        setLoading(false)
    }
    useEffect(() => {
        handleData()
    }, [])
    const columns = [
        {
            title: 'Selectted text',
            dataIndex: 'selectedText',
            key: 'selectedText',
            with: 400,
            ellipsis: true
        },
        {
            title: 'Input text',
            dataIndex: 'inputText',
            key: 'inputText',
        },
    ];
    return <div>
        <Table loading={loading} dataSource={dataSource} columns={columns} />;
    </div>
}

export default Records

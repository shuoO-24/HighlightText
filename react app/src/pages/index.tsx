import { Button, Form, FormInstance, Input, message, Modal } from 'antd';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Highlighter from 'web-highlighter';
export const BSAEURL = 'http://localhost:8080'
export default function Index() {
    const highlighter = new Highlighter();
    const [visible, setVisible] = useState(false)
    const [input, setInput] = useState('')
    const [current, setCurrent] = useState<any>({})
    const formRef = React.createRef<FormInstance>()

    useEffect(() => {
        highlighter.on(Highlighter.event.CREATE, ({ sources: [source] }) => {
            console.log(source);
            setCurrent(source)
            setTimeout(() => {
                setVisible(true)
                setInput('')
            }, 300)
        });

        highlighter.run();
    }, [])

    const handleOk = () => {
        formRef.current?.validateFields().then(async (v) => {
            setVisible(false)
            const hide = message.loading('正在提交');
            const url = `${BSAEURL}/api/create/`
            const data = {
                selectedText: current.text,
                inputText: input
            }
            try {
                await axios.post(url, data)
                hide();
                message.success('Added successfully');
            } catch (e) {
                message.error('Adding failed, please try again!');
            }

            console.log(v);
            console.log(input);
            console.log(current.text);
        })
    }

    const handleCancle = () => {
        const { id } = current
        highlighter.remove(id)
        setVisible(false)
        setInput('')
    }

    return (
        <>

            <div
                className='main'
            >
                <Button onClick={() => {
                    window.location.href = '/records'
                }} type='primary'>View Submitted Text</Button>
                <Modal
                    title="Submit"
                    okText="Submit"
                    cancelText="Cancel"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancle}>
                    <Form
                        ref={formRef}
                        name="basic"
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Type text"
                            name="input"
                            rules={[{ required: true, message: 'Please input!' }]}
                        >
                            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Please input" />
                        </Form.Item>
                    </Form>
                </Modal>

                <div className='content'>
                    <p className="md_block">
                        <span className="md_line md_line_start">
                            Critics faced with the daunting interpretative task of Shakepeare's sonnets have often resorted to speculation about the poet's relations with the "young man" of the first sequence, or the ethics of his addresses to the promiscuous "dark lady." It is odd, these days when the aims of narrative come under such critical scrutiny, to find that that the sonnets are still so often treated as stories or arguments- especially since the narrative content of the sonnets is often slight. Sonnet 71, for instance, when pared down to its essential information, becomes "I am dead / I am fled / I love you so / I am gone." In her introduction to The Art of Shakespeare's Sonnets, Helen Vendler comments on the problem that the poems' irreducible natures pose: "The appeal of lyric lies elsewhere than in its paraphrasable statement," she writes. "Where then does the charm of lyric lie?" The phrasing of this question reveals the appreciative and investigative approach Vendler takes throughout the book, and if her answer-"the arrangement of statement"-sounds a bit dry, what follows is instead a heady journey into the sounds, structures, and strategies of the sonnets, led by a guide as perceptive and rigorously instructive as one could wish for.<br />
                        </span>
                        <span className="md_line md_line_dom_embed"><br /></span>
                        <span className="md_line">Each sonnet is presented here first in the typeface and spelling of the 1609 Quarto, and then in Vendler's modernized version, with adjusted spelling and punctuation. In the brief and illuminating essays that follow each poem, Vendler aims for what she terms "evidential criticism": "remarks for which I attempt to supply instant and sufficient linguistic evidence." These remarks are enhanced by her conversation with the critical works of John Kerrigan and Stephen Booth among others. Vendler uses numerous systems of classification (shifts in subject, pronouns, tenses, idiom, argument, and speech acts; distinctions between private and social; lateral and vertical vocabulary connections; references to the Petrarchan model) to analyze the sonnet's architecture.<br /></span>
                        <span className="md_line md_line_dom_embed"> <br /></span>
                        <span className="md_line">Diagrams abound. These are most useful in the complicated "avoidance sonnets," in which the speaker, like an Elizabethan Houdini, ingeniously evades unhappy conclusions, and the "betrayal sonnets," in which the speaker, the young man and the mistress all appear. Of Sonnet 42, which ends on this couplet of contrived inclusion, "But here's the joy, my friend and I are one: / Sweet flattery! then she loves but me alone," Vendler writes: "Shakespeare offers four models to describe the relations between the three persons in the triangle. The models become increasingly tortured, as the speaker tries to find a way to include himself in the relationship of the young man to the mistress." She tracks the speaker's gradual loss of love through the pronouns, which move from second to third person address, explaining: "The aesthetic pathos of the poem arises from the loss of the power to say thee any longer. 'Thou and I are one,' is the pathetic second-person shadow-statement, unsayable, behind the third-person fantasy-statement, 'My friend and I are one.'"<br /></span>
                        <span className="md_line md_line_dom_embed"><br /></span>
                        <span className="md_line">"Shakespeare almost never repeats a strategy," Vendler argues, and the numerous ways in which she describes the sonnets-as "homily," "cross minuet," "apotropaic charm" and "jeu d'esprit"-support her claim. Sonnet 76-in which the speaker responds to a complaint by the bored young man against the monotony of his receiving "old-fashioned" poems that are so tediously constant in form that anyone can identify them as Shakespeare's-she reads not as apology but as "apologia, a reply in self-defense."<br /></span>
                    </p >




                </div >

            </div >
        </>

    );
}

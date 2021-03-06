import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={'react aaaaaa'}/>);
        const instance = component.getInstance()
        expect(instance.state.status).toBe('react aaaaaa')
    });

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status={'react aaaaaa'}/>);
        const root = component.root
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    });

    test("after creation input shouldnt be displayed", () => {
        const component = create(<ProfileStatus status={'react aaaaaa'}/>);
        const root = component.root
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    });

    test("after creation span with status should be displayed with correct status", () => {
        const component = create(<ProfileStatus status={'react aaaaaa'}/>);
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe('react aaaaaa')
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status={'react aaaaaa'}/>);
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('react aaaaaa')
    });

});
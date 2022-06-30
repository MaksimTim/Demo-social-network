import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

const ProfileStatusWithHooks: React.ElementType<PropsType> = (props) => {

    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return <div>
        {!editMode &&
        <div>
                <b>Status: </b><span onDoubleClick={activateEditMode}
                >{props.status || 'no status'}</span>
        </div>
        }
        {editMode &&
        <div>
            <input
                onChange={onStatusChange}
                onBlur={deactivateEditMode}
                autoFocus={true}
                value={status}/>
        </div>
        }
    </div>
}


export default ProfileStatusWithHooks
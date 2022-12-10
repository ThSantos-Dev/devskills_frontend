import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../../components/shared/Layout/Container/Container";
import UserService from "../../../services/apiDevSkills/dev/userService";
import { TDevGroup } from "../../../types/devskills/dev/TDevGroups";
import styles from "./Group.module.css";


const GroupPage = () => {
    const { id } = useParams();
    const { user } = useSelector((state: any) => state.auth);
    const [userGroups, setUserGroups] = useState<TDevGroup[]>()


    const getUserGroups = () => {
        if (!id) return;
        UserService.getUserGroups(parseInt(id), user.token).then((res: any) => {
            setUserGroups(res.data)
        })

    }

    useEffect(() => {
        getUserGroups()
    }, [])

    return (
        <Container>
            <table className={styles.user_table_group_container}>
                <tr>
                    <th>Nome do grupo</th>
                    <th>Criador</th>
                    <th>Status</th>
                    <th>Ver mais</th>
                </tr>
                {
                    userGroups?.map((userGroup: TDevGroup) => {
                        return (
                            <tr>
                                <td>{userGroup.grupo.nome}</td>
                                <td>{userGroup.grupo.provaGrupo[0].provaAndamento.empresa.nome_fantasia}</td>
                                <td>{userGroup.grupo.status ? <div className={styles.user_table_group_status_active}>Ativo</div> : <div className={styles.user_table_group_status_inactive}>Inativo</div>}</td>
                                <td>...</td>
                            </tr>
                        )
                    })
                }


            </table>
        </Container>
    )

}

export default GroupPage
declare const RetailBrandingJSON: {
    general: {
        bot_icon: string;
        size: string;
        themeType: string;
        colors: {
            primary: string;
            secondary: string;
            primary_text: string;
            secondary_text: string;
            useColorPaletteOnly: boolean;
        };
        sounds: {
            enable: boolean;
            on_open: {
                name: string;
                type: string;
                url: string;
            };
            on_close: {
                name: string;
                type: string;
                url: string;
            };
            on_new_msg: {
                name: string;
                type: string;
                url: string;
            };
            on_msg_send: {
                name: string;
                type: string;
                url: string;
            };
            on_proactive_msg: {
                name: string;
                type: string;
                url: string;
            };
            on_audio_call: {
                name: string;
                type: string;
                url: string;
            };
            on_video_call: {
                name: string;
                type: string;
                url: string;
            };
        };
    };
    chat_bubble: {
        style: string;
        icon: {
            icon_url: string;
            size: string;
            type: string;
        };
        minimise: {
            icon: string;
            theme: string;
            type: string;
        };
        proactive: {
            show: boolean;
            messages: {
                title: string;
            }[];
        };
        sound: string;
        alignment: string;
        animation: string;
        expand_animation: string;
        primary_color: string;
        secondary_color: string;
    };
    welcome_screen: {
        show: boolean;
        layout: string;
        logo: {
            logo_url: string;
            name: string;
        };
        title: {
            name: string;
            emoji: string;
        };
        sub_title: {
            name: string;
        };
        note: {
            name: string;
        };
        background: {
            type: string;
            color: string;
            img: string;
            name: string;
        };
        top_fonts: {
            color: string;
        };
        bottom_background: {
            color: string;
        };
        templates: never[];
        starter_box: {
            show: boolean;
            icon: {
                show: boolean;
            };
            title: string;
            sub_text: string;
            start_conv_button: {
                color: string;
            };
            start_conv_text: {
                color: string;
            };
            quick_start_buttons: {
                show: boolean;
                style: string;
                buttons: {
                    title: string;
                    action: {
                        type: string;
                        value: string;
                    };
                }[];
                input: string;
                action: {
                    type: string;
                    value: string;
                    title: string;
                };
            };
        };
        static_links: {
            show: boolean;
            layout: string;
            links: {
                title: string;
                description: string;
                action: {
                    type: string;
                    value: string;
                };
            }[];
        };
        promotional_content: {
            show: boolean;
            promotions: {
                banner: string;
                name: string;
                action: {
                    type: string;
                    value: string;
                };
            }[];
        };
    };
    header: {
        bg_color: string;
        size: string;
        icon: {
            show: boolean;
            icon_url: string;
            type: string;
        };
        icons_color: string;
        title: {
            name: string;
            color: string;
        };
        sub_title: {
            name: string;
            color: string;
        };
        buttons: {
            close: {
                show: boolean;
                icon: string;
            };
            minimise: {
                show: string;
                icon: string;
            };
            expand: {
                show: string;
                icon: string;
            };
            reconnect: {
                show: boolean;
                icon: string;
            };
            help: {
                show: boolean;
                action: {
                    type: string;
                    value: string;
                    icon: string;
                };
            };
            live_agent: {
                show: boolean;
                action: {
                    type: string;
                    value: string;
                    icon: string;
                };
            };
        };
    };
    footer: {
        bg_color: string;
        layout: string;
        compose_bar: {
            bg_color: string;
            "outline-color": string;
            placeholder: string;
        };
        icons_color: string;
        buttons: {
            menu: {
                show: boolean;
                icon_color: string;
                actions: {
                    title: string;
                    type: string;
                    value: string;
                    icon: string;
                }[];
            };
            emoji: {
                show: boolean;
                icon: string;
            };
            microphone: {
                show: boolean;
                icon: string;
            };
            attachment: {
                show: boolean;
                icon: string;
            };
        };
    };
    body: {
        background: {
            type: string;
            color: string;
            img: string;
            name: string;
        };
        font: {
            family: string;
            size: string;
            style: string;
        };
        user_message: {
            bg_color: string;
            color: string;
        };
        bot_message: {
            bg_color: string;
            color: string;
        };
        agent_message: {
            bg_color: string;
            color: string;
            separator: string;
            icon: {
                show: boolean;
                icon_url: string;
                type: string;
            };
            title: {
                name: string;
                color: string;
            };
            sub_title: {
                name: string;
                color: string;
                type: string;
            };
        };
        time_stamp: {
            show: boolean;
            show_type: string;
            position: string;
            separator: string;
            color: string;
            time_format: string;
            date_format: string;
        };
        icon: {
            show: boolean;
            user_icon: boolean;
            bot_icon: boolean;
            agent_icon: boolean;
        };
        buttons: {
            bg_color: string;
            color: string;
        };
        typing_indicator: {
            show: boolean;
            icon: string;
        };
        bubble_style: string;
        primaryColor: string;
        primaryHoverColor: string;
        secondaryColor: string;
        secondaryHoverColor: string;
        img: string;
    };
};
export default RetailBrandingJSON;

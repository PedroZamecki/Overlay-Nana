
    var colorPreset = [{
            color:"#fee0ff",
            opacity:255
        }, {
            color:"#febdff",
            opacity:255
        }],
        settings = {
            genStreamerList: ["nanallve"],
            genChatDirection: "up",
            genFilterUser: [], // Kleinbuchstaben!
            genFilterMsg: [],
            genMaxMessages: 150,
            cbxLayout: {
                user: {
                    value: {
                        type: "row",
                        layoutRowSizing: "message"
                    },
                    active: true
                },
    
                sub: {
                    value: {
                        type: "column",
                        layoutRowSizing: "space"
                    },
                    active: false
                },
    
                vip: {
                    value: {
                        type: "column",
                        layoutRowSizing: "space"
                    },
                    active: false
                },
    
                mod: {
                    value: {
                        type: "column",
                        layoutRowSizing: "space"
                    },
                    active: false
                },
            },
            cbxBackground: {
                user: {
                    value: [{
                type: "linear",
                name: "Background 1",
                rotate: 90,
                colors: [
                    {
                    position: 0,
                    type: 'custom',
                    color: '#febdff',
                    opacity: 255,
                    count: 0
                }, {
                    position: 100,
                    type: 'custom',
                    color: '#ffffff',
                    opacity: 255,
                    count: 1
                }
                ],
                posX: {
                    percent: 50,
                    px: 0
                },
                posY: {
                    percent: 50,
                    px: 0
                },
                width: {
                    percent: 100,
                    px: 0,
                },
                height: {
                    percent: 100,
                    px: 0
                }
            }],
                    active: true
                },
                sub: {
                    value: [{
                type: "linear",
                name: "Background 1",
                rotate: 90,
                colors: [
                    {
                    position: 0,
                    type: 'custom',
                    color: '#febdff',
                    opacity: 255,
                    count: 0
                }, {
                    position: 100,
                    type: 'custom',
                    color: '#ffffff',
                    opacity: 255,
                    count: 1
                }
                ],
                posX: {
                    percent: 50,
                    px: 0
                },
                posY: {
                    percent: 50,
                    px: 0
                },
                width: {
                    percent: 100,
                    px: 0,
                },
                height: {
                    percent: 100,
                    px: 0
                }
            }],
                    active: true
                },
                vip: {
                    value: [{
                type: "linear",
                name: "Background 1",
                rotate: 90,
                colors: [
                    {
                    position: 0,
                    type: 'custom',
                    color: '#febdff',
                    opacity: 255,
                    count: 0
                }, {
                    position: 100,
                    type: 'custom',
                    color: '#ffffff',
                    opacity: 255,
                    count: 1
                }
                ],
                posX: {
                    percent: 50,
                    px: 0
                },
                posY: {
                    percent: 50,
                    px: 0
                },
                width: {
                    percent: 100,
                    px: 0,
                },
                height: {
                    percent: 100,
                    px: 0
                }
            }],
                    active: true
                },
                mod: {
                    value: [{
                type: "linear",
                name: "Background 1",
                rotate: 90,
                colors: [
                    {
                    position: 0,
                    type: 'custom',
                    color: '#febdff',
                    opacity: 255,
                    count: 0
                }, {
                    position: 100,
                    type: 'custom',
                    color: '#ffffff',
                    opacity: 255,
                    count: 1
                }
                ],
                posX: {
                    percent: 50,
                    px: 0
                },
                posY: {
                    percent: 50,
                    px: 0
                },
                width: {
                    percent: 100,
                    px: 0,
                },
                height: {
                    percent: 100,
                    px: 0
                }
            }],
                    active: true
                }
            },
            cbxBackgroundMask: {
                user: {
                    value: [],
                    active: true
                },
                sub: {
                    value: [],
                    active: false
                },
                vip: {
                    value: [],
                    active: false
                },
                mod: {
                    value: [],
                    active: false
                }
            },
            cbxBorder: {
                user: {
                    value: {
                        top: {
                            type: "solid",
                            width: 3, // In px
                            color: {
                                type: "custom",
                                color: "#febdff",
                                opacity: 255 // In Hex
                            }
                        },
                        bottom: {
                            type: "solid",
                            width: 3, // In px
                            color: {
                                type: "custom",
                                color: "#febdff",
                                opacity: 255 // In Hex
                            }
                        },
                        left: {
                            type: "solid",
                            width: 3, // In px
                            color: {
                                type: "custom",
                                color: "#febdff",
                                opacity: 255 // In Hex
                            }
                        },
                        right: {
                            type: "solid",
                            width: 3, // In px
                            color: {
                                type: "custom",
                                color: "#febdff",
                                opacity: 255 // In Hex
                            }
                        },
                        tl: 33, // In px
                        tr: 10, // In px
                        bl: 10, // In px
                        br: 10  // In px
                    },
                    active: true
                },
                sub: {
                    value: {
                        top: {
                            type: "solid",
                            width: 3, // In px
                            color: {
                                type: "custom",
                                color: "#febdff",
                                opacity: 255 // In Hex
                            }
                        },
                        bottom: {
                            type: "solid",
                            width: 3, // In px
                            color: {
                                type: "custom",
                                color: "#febdff",
                                opacity: 255 // In Hex
                            }
                        },
                        left: {
                            type: "solid",
                            width: 3, // In px
                            color: {
                                type: "custom",
                                color: "#febdff",
                                opacity: 255 // In Hex
                            }
                        },
                        right: {
                            type: "solid",
                            width: 3, // In px
                            color: {
                                type: "custom",
                                color: "#febdff",
                                opacity: 255 // In Hex
                            }
                        },
                        tl: 22, // In px
                        tr: 10, // In px
                        bl: 10, // In px
                        br: 10  // In px
                    },
                    active: false
                },
                vip: {
                    value: {
                        top: {
                            type: "solid",
                            width: 3, // In px
                            color: {
                                type: "custom",
                                color: "#febdff",
                                opacity: 255 // In Hex
                            }
                        },
                        bottom: {
                            type: "solid",
                            width: 3, // In px
                            color: {
                                type: "custom",
                                color: "#febdff",
                                opacity: 255 // In Hex
                            }
                        },
                        left: {
                            type: "solid",
                            width: 3, // In px
                            color: {
                                type: "custom",
                                color: "#febdff",
                                opacity: 255 // In Hex
                            }
                        },
                        right: {
                            type: "solid",
                            width: 3, // In px
                            color: {
                                type: "custom",
                                color: "#febdff",
                                opacity: 255 // In Hex
                            }
                        },
                        tl: 22, // In px
                        tr: 10, // In px
                        bl: 10, // In px
                        br: 10  // In px
                    },
                    active: false
                },
                mod: {
                    value: {
                        top: {
                            type: "solid",
                            width: 3, // In px
                            color: {
                                type: "custom",
                                color: "#febdff",
                                opacity: 255 // In Hex
                            }
                        },
                        bottom: {
                            type: "solid",
                            width: 3, // In px
                            color: {
                                type: "custom",
                                color: "#febdff",
                                opacity: 255 // In Hex
                            }
                        },
                        left: {
                            type: "solid",
                            width: 3, // In px
                            color: {
                                type: "custom",
                                color: "#febdff",
                                opacity: 255 // In Hex
                            }
                        },
                        right: {
                            type: "solid",
                            width: 3, // In px
                            color: {
                                type: "custom",
                                color: "#febdff",
                                opacity: 255 // In Hex
                            }
                        },
                        tl: 22, // In px
                        tr: 10, // In px
                        bl: 10, // In px
                        br: 10  // In px
                    },
                    active: false
                }
            },
            cbxShadow: {
                user: {
                    value: [],
                    active: true
                },
                sub: {
                    value: [],
                    active: false
                },
                vip: {
                    value: [],
                    active: false
                },
                mod: {
                    value: [],
                    active: false
                }
            },
            cbxPosition: {
                user: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 15, // In px
                                left: 15, // In px
                                right: 15, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            }
                        },
                        sizing: "flex-start"
                    },
                    active: true
                },
                sub: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            }
                        },
                        sizing: "stretch"
                    },
                    active: false
                },
                vip: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            }
                        },
                        sizing: "stretch"
                    },
                    active: false
                },
                mod: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            }
                        },
                        sizing: "stretch"
                    },
                    active: false
                }
            },
            usnBackground: {
                user: {
                    value: [{
                type: "solid",
                name: "Background 1",
                colors: [
                    {
                        position: 0,
                        type: 'custom',
                        color: '#fffafa',
                        opacity: 255,
                        count: 0
                    }
                ],
                posX: {
                    percent: 50,
                    px: 0
                },
                posY: {
                    percent: 50,
                    px: 0
                },
                width: {
                    percent: 100,
                    px: 0,
                },
                height: {
                    percent: 100,
                    px: 0
                }
            }],
                    active: true
                },
                sub: {
                    value: [{
                type: "solid",
                name: "Background 1",
                colors: [
                    {
                        position: 0,
                        type: 'custom',
                        color: '#fffafa',
                        opacity: 255,
                        count: 0
                    }
                ],
                posX: {
                    percent: 50,
                    px: 0
                },
                posY: {
                    percent: 50,
                    px: 0
                },
                width: {
                    percent: 100,
                    px: 0,
                },
                height: {
                    percent: 100,
                    px: 0
                }
            }],
                    active: false
                },
                vip: {
                    value: [{
                type: "solid",
                name: "Background 1",
                colors: [
                    {
                        position: 0,
                        type: 'custom',
                        color: '#fffafa',
                        opacity: 255,
                        count: 0
                    }
                ],
                posX: {
                    percent: 50,
                    px: 0
                },
                posY: {
                    percent: 50,
                    px: 0
                },
                width: {
                    percent: 100,
                    px: 0,
                },
                height: {
                    percent: 100,
                    px: 0
                }
            }],
                    active: false
                },
                mod: {
                    value: [{
                type: "solid",
                name: "Background 1",
                colors: [
                    {
                        position: 0,
                        type: 'custom',
                        color: '#fffafa',
                        opacity: 255,
                        count: 0
                    }
                ],
                posX: {
                    percent: 50,
                    px: 0
                },
                posY: {
                    percent: 50,
                    px: 0
                },
                width: {
                    percent: 100,
                    px: 0,
                },
                height: {
                    percent: 100,
                    px: 0
                }
            }],
                    active: false
                }
            },
            usnBackgroundMask: {
                user: {
                    value: [],
                    active: true
                },
                sub: {
                    value: [],
                    active: false
                },
                vip: {
                    value: [],
                    active: false
                },
                mod: {
                    value: [],
                    active: false
                }
            },
            usnBorder: {
                user: {
                    value: {
                        top: {
                            type: "double",
                            width: 2, // In px
                            color: {
                                type: "twitch",
                                color: "#fffafa",
                                opacity: 255 // In Hex
                            }
                        },
                        bottom: {
                            type: "double",
                            width: 2, // In px
                            color: {
                                type: "twitch",
                                color: "#fffafa",
                                opacity: 255 // In Hex
                            }
                        },
                        left: {
                            type: "double",
                            width: 2, // In px
                            color: {
                                type: "twitch",
                                color: "#fffafa",
                                opacity: 255 // In Hex
                            }
                        },
                        right: {
                            type: "double",
                            width: 2, // In px
                            color: {
                                type: "twitch",
                                color: "#fffafa",
                                opacity: 255 // In Hex
                            }
                        },
                        tl: 30, // In px
                        tr: 8, // In px
                        bl: 8, // In px
                        br: 20  // In px
                    },
                    active: true
                },
                sub: {
                    value: {
                        top: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        bottom: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        left: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        right: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        tl: 20, // In px
                        tr: 0, // In px
                        bl: 0, // In px
                        br: 20  // In px
                    },
                    active: false
                },
                vip: {
                    value: {
                        top: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        bottom: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        left: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        right: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        tl: 20, // In px
                        tr: 0, // In px
                        bl: 0, // In px
                        br: 20  // In px
                    },
                    active: false
                },
                mod: {
                    value: {
                        top: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        bottom: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        left: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        right: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        tl: 20, // In px
                        tr: 0, // In px
                        bl: 0, // In px
                        br: 20  // In px
                    },
                    active: false
                }
            },
            usnShadow: {
                user: {
                    value: [],
                    active: true
                },
                sub: {
                    value: [],
                    active: false
                },
                vip: {
                    value: [],
                    active: false
                },
                mod: {
                    value: [],
                    active: false
                }
            },
            usnPosition: {
                user: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 10, // In px
                                bottom: 10, // In px
                                left: 15, // In px
                                right: 15, // In px
                            }
                        },
                        sizingH: "flex-start",
                        sizingV: "flex-start"
                    },
                    active: true
                },
                sub: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            }
                        },
                        sizingH: "flex-end",
                        sizingV: "stretch"
                    },
                    active: false
                },
                vip: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            }
                        },
                        sizingH: "flex-end",
                        sizingV: "stretch"
                    },
                    active: false
                },
                mod: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            }
                        },
                        sizingH: "flex-end",
                        sizingV: "stretch"
                    },
                    active: false
                }
            },
            usnFont: {
                user: {
                    value: {
                        family: "Arial",
                        size: 26,
                        weight: 700,
                        height: {
                            auto: true,
                            height: 16 // In px
                        },
                        spacing: 0, // In px
                        lines: {
                            upperLine: false,
                            crossLine: false,
                            underLine: false
                        },
                        hAlign: "left",
                        italic: false,
                        color: {
                            type: "twitch",
                            color: "#ffffff",
                            opacity: 255 // In Hex
                        },
                    },
                    active: true
                },
                sub: {
                    value: {
                        family: "Arial",
                        size: 14,
                        weight: 700,
                        height: {
                            auto: true,
                            height: 16 // In px
                        },
                        spacing: 0, // In px
                        lines: {
                            upperLine: false,
                            crossLine: false,
                            underLine: false
                        },
                        hAlign: "right",
                        italic: false,
                        color: {
                            type: "twitch",
                            color: "#ffffff",
                            opacity: 255 // In Hex
                        },
                    },
                    active: false
                },
                vip: {
                    value: {
                        family: "Arial",
                        size: 14,
                        weight: 700,
                        height: {
                            auto: true,
                            height: 16 // In px
                        },
                        spacing: 0, // In px
                        lines: {
                            upperLine: false,
                            crossLine: false,
                            underLine: false
                        },
                        hAlign: "right",
                        italic: false,
                        color: {
                            type: "twitch",
                            color: "#ffffff",
                            opacity: 255 // In Hex
                        },
                    },
                    active: false
                },
                mod: {
                    value: {
                        family: "Arial",
                        size: 14,
                        weight: 700,
                        height: {
                            auto: true,
                            height: 16 // In px
                        },
                        spacing: 0, // In px
                        lines: {
                            upperLine: false,
                            crossLine: false,
                            underLine: false
                        },
                        hAlign: "right",
                        italic: false,
                        color: {
                            type: "twitch",
                            color: "#ffffff",
                            opacity: 255 // In Hex
                        },
                    },
                    active: false
                }
            },
            usnFontShadow: {
                user: {
                    value: [{
        x: 0,
        y: 1,
        blur: 1,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }, {
        x: 1,
        y: 0,
        blur: 1,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }],
                    active: true
                },
                sub: {
                    value: [{
        x: -1,
        y: -1,
        blur: 0,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }, {
        x: 1,
        y: 1,
        blur: 1,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }, {
        x: 1,
        y: 0,
        blur: 1,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }, {
        x: 0,
        y: 1,
        blur: 1,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }],
                    active: false
                },
                vip: {
                    value: [{
        x: -1,
        y: -1,
        blur: 0,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }, {
        x: 1,
        y: 1,
        blur: 1,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }, {
        x: 1,
        y: 0,
        blur: 1,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }, {
        x: 0,
        y: 1,
        blur: 1,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }],
                    active: false
                },
                mod: {
                    value: [{
        x: -1,
        y: -1,
        blur: 0,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }, {
        x: 1,
        y: 1,
        blur: 1,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }, {
        x: 1,
        y: 0,
        blur: 1,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }, {
        x: 0,
        y: 1,
        blur: 1,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }],
                    active: false
                }
            },
            usnContent: {
                user: {
                    value: "{badges}{usn}",
                    active: true
                },
                sub: {
                    value: "{badges}{usn}",
                    active: false
                },
                vip: {
                    value: "{badges}{usn}",
                    active: false
                },
                mod: {
                    value: "{badges}{usn}",
                    active: false
                }
            },
            msgBackground: {
                user: {
                    value: [],
                    active: true
                },
                sub: {
                    value: [],
                    active: false
                },
                vip: {
                    value: [],
                    active: false
                },
                mod: {
                    value: [],
                    active: false
                }
            },
            msgBackgroundMask: {
                user: {
                    value: [{
                type: "radial",
                name: "Circle Bottom Right",
                size: "farthest-side",
                x: 0,
                y: 0,
                colors: [
                    {
                    position: 100,
                    opacity: 0,
                    count: 1
                }, {
                    position: 54.3,
                    opacity: 255,
                    count: 0
                }
                ],
                posX: {
                    percent: 100,
                    px: -10
                },
                posY: {
                    percent: 100,
                    px: 0
                },
                width: {
                    percent: 0,
                    px: 10,
                },
                height: {
                    percent: 0,
                    px: 10
                }
            }, {
                type: "radial",
                name: "Circle Top Right",
                size: "farthest-side",
                x: 100,
                y: 100,
                colors: [
                    {
                    position: 90,
                    opacity: 0,
                    count: 0
                }, {
                    position: 100,
                    opacity: 255,
                    count: 1
                }
                ],
                posX: {
                    percent: 100,
                    px: 0
                },
                posY: {
                    percent: 0,
                    px: 0
                },
                width: {
                    percent: 0,
                    px: 10,
                },
                height: {
                    percent: 0,
                    px: 10
                }
            }, {
                type: "solid",
                name: "Smaller Area",
                colors: [
                    {
                        position: 0,
                        opacity: 255,
                        count: 0
                    }
                ],
                posX: {
                    percent: 0,
                    px: 0
                },
                posY: {
                    percent: 0,
                    px: 0
                },
                width: {
                    percent: 100,
                    px: -10,
                },
                height: {
                    percent: 100,
                    px: -10
                }
            }, {
                type: "solid",
                name: "Big Area",
                colors: [
                    {
                        position: 0,
                        opacity: 255,
                        count: 0
                    }
                ],
                posX: {
                    percent: 0,
                    px: 0
                },
                posY: {
                    percent: 50,
                    px: 0
                },
                width: {
                    percent: 100,
                    px: -20,
                },
                height: {
                    percent: 100,
                    px: 0
                }
            }],
                    active: true
                },
                sub: {
                    value: [],
                    active: false
                },
                vip: {
                    value: [],
                    active: false
                },
                mod: {
                    value: [],
                    active: false
                }
            },
            msgBorder: {
                user: {
                    value: {
                        top: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        bottom: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        left: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        right: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        tl: 0, // In px
                        tr: 0, // In px
                        bl: 0, // In px
                        br: 0  // In px
                    },
                    active: true
                },
                sub: {
                    value: {
                        top: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        bottom: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        left: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        right: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        tl: 0, // In px
                        tr: 0, // In px
                        bl: 0, // In px
                        br: 0  // In px
                    },
                    active: false
                },
                vip: {
                    value: {
                        top: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        bottom: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        left: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        right: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        tl: 0, // In px
                        tr: 0, // In px
                        bl: 0, // In px
                        br: 0  // In px
                    },
                    active: false
                },
                mod: {
                    value: {
                        top: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        bottom: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        left: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        right: {
                            type: "none",
                            width: 1, // In px
                            color: {
                                type: "custom",
                                color: "#ffffff",
                                opacity: 255 // In Hex
                            }
                        },
                        tl: 0, // In px
                        tr: 0, // In px
                        bl: 0, // In px
                        br: 0  // In px
                    },
                    active: false
                }
            },
            msgShadow: {
                user: {
                    value: [],
                    active: true
                },
                sub: {
                    value: [],
                    active: false
                },
                vip: {
                    value: [],
                    active: false
                },
                mod: {
                    value: [],
                    active: false
                }
            },
            msgPosition: {
                user: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: -10, // In px
                            },
                            inner: {
                                top: 10, // In px
                                bottom: 10, // In px
                                left: 15, // In px
                                right: 25, // In px
                            }
                        },
                        sizingH: "flex-start",
                        sizingV: "stretch"
                    },
                    active: true
                },
                sub: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            }
                        },
                        sizingH: "flex-end",
                        sizingV: "stretch"
                    },
                    active: false
                },
                vip: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            }
                        },
                        sizingH: "flex-end",
                        sizingV: "stretch"
                    },
                    active: false
                },
                mod: {
                    value: {
                        spacing: {
                            outer: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            },
                            inner: {
                                top: 0, // In px
                                bottom: 0, // In px
                                left: 0, // In px
                                right: 0, // In px
                            }
                        },
                        sizingH: "flex-end",
                        sizingV: "stretch"
                    },
                    active: false
                }
            },
            msgFont: {
                user: {
                    value: {
                        family: "Arial",
                        size: 26,
                        weight: 400,
                        height: {
                            auto: true,
                            height: 16 // In px
                        },
                        spacing: 0, // In px
                        lines: {
                            upperLine: false,
                            crossLine: false,
                            underLine: false
                        },
                        hAlign: "left",
                        italic: false,
                        color: {
                            type: "custom",
                            color: "#ffffff",
                            opacity: 255 // In Hex
                        },
                    },
                    active: true
                },
                sub: {
                    value: {
                        family: "Arial",
                        size: 14,
                        weight: 400,
                        height: {
                            auto: true,
                            height: 16 // In px
                        },
                        spacing: 0, // In px
                        lines: {
                            upperLine: false,
                            crossLine: false,
                            underLine: false
                        },
                        hAlign: "right",
                        italic: false,
                        color: {
                            type: "custom",
                            color: "#ffffff",
                            opacity: 255 // In Hex
                        },
                    },
                    active: false
                },
                vip: {
                    value: {
                        family: "Arial",
                        size: 14,
                        weight: 400,
                        height: {
                            auto: true,
                            height: 16 // In px
                        },
                        spacing: 0, // In px
                        lines: {
                            upperLine: false,
                            crossLine: false,
                            underLine: false
                        },
                        hAlign: "right",
                        italic: false,
                        color: {
                            type: "custom",
                            color: "#ffffff",
                            opacity: 255 // In Hex
                        },
                    },
                    active: false
                },
                mod: {
                    value: {
                        family: "Arial",
                        size: 14,
                        weight: 400,
                        height: {
                            auto: true,
                            height: 16 // In px
                        },
                        spacing: 0, // In px
                        lines: {
                            upperLine: false,
                            crossLine: false,
                            underLine: false
                        },
                        hAlign: "right",
                        italic: false,
                        color: {
                            type: "custom",
                            color: "#ffffff",
                            opacity: 255 // In Hex
                        },
                    },
                    active: false
                }
            },
            msgFontShadow: {
                user: {
                    value: [{
        x: 0,
        y: 1,
        blur: 2,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }, {
        x: 1,
        y: 0,
        blur: 2,
        color: {
            type: "custom",
            color: "#000000",
            opacity: 255
        }
        }],
                    active: true
                },
                sub: {
                    value: [],
                    active: false
                },
                vip: {
                    value: [],
                    active: false
                },
                mod: {
                    value: [],
                    active: false
                }
            },
            msgContent: {
                user: {
                    value: "{msg}",
                    active: true
                },
                sub: {
                    value: "{msg}",
                    active: false
                },
                vip: {
                    value: "{msg}",
                    active: false
                },
                mod: {
                    value: "{msg}",
                    active: false
                }
            },
            othEmotes: {
                user: {
                    value: {
                        auto: true,
                        height: 24, // In px
                        linePos: "middle" // top/middle/bottom
                    },
                    active: true
                },
                sub: {
                    value: {
                        auto: true,
                        height: 24, // In px
                        linePos: "middle" // top/middle/bottom
                    },
                    active: false
                },
                vip: {
                    value: {
                        auto: true,
                        height: 24, // In px
                        linePos: "middle" // top/middle/bottom
                    },
                    active: false
                },
                mod: {
                    value: {
                        auto: true,
                        height: 24, // In px
                        linePos: "middle" // top/middle/bottom
                    },
                    active: false
                }
            },
            othBadges: {
                user: {
                    value: {
                        gap: 2, // In px
                        size: {
                            height: 16, // In px
                            auto: true
                        }
                    },
                    active: true
                },
                sub: {
                    value: {
                        gap: 2, // In px
                        size: {
                            height: 16, // In px
                            auto: true
                        }
                    },
                    active: false
                },
                vip: {
                    value: {
                        gap: 2, // In px
                        size: {
                            height: 16, // In px
                            auto: true
                        }
                    },
                    active: false
                },
                mod: {
                    value: {
                        gap: 2, // In px
                        size: {
                            height: 16, // In px
                            auto: true
                        }
                    },
                    active: false
                }
            },
            othHyphens: {
                active: true,
                lang: "pt"
            },
            anmTiming: {
                user: {
                    value: {
                        delay: 0,
                        appearing: 500,
                        duration: "infinite",
                        vanishing: 200
                    },
                    active: true
                },
                sub: {
                    value: {
                        delay: 0,
                        appearing: 500,
                        duration: "infinite",
                        vanishing: 200
                    },
                    active: false
                },
                vip: {
                    value: {
                        delay: 0,
                        appearing: 500,
                        duration: "infinite",
                        vanishing: 200
                    },
                    active: false
                },
                mod: {
                    value: {
                        delay: 0,
                        appearing: 500,
                        duration: "infinite",
                        vanishing: 200
                    },
                    active: false
                }
            },
            anmShow: {
                user: {
                    value: [
                        {
                            type: "scale",
                            active: false,
                            value: 1
                        }, {
                            type: "moveX",
                            active: false,
                            value: 0
                        }, {
                            type: "moveY",
                            active: true,
                            value: -20
                        }, {
                            type: "rotateX",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateY",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateZ",
                            active: false,
                            value: 0
                        }, {
                            type: "opacity",
                            active: true,
                            value: 0
                        }, {
                            type: "curve",
                            value: "cubic-bezier(.4,0,.4,1)"
                        }
                    ],
                    active: true
                },
                sub: {
                    value: [
                        {
                            type: "scale",
                            active: false,
                            value: 1
                        }, {
                            type: "moveX",
                            active: false,
                            value: 0
                        }, {
                            type: "moveY",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateX",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateY",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateZ",
                            active: false,
                            value: 0
                        }, {
                            type: "opacity",
                            active: false,
                            value: 100
                        }, {
                            type: "curve",
                            value: "cubic-bezier(.4,0,.4,1)"
                        }
                    ],
                    active: false
                },
                vip: {
                    value: [
                        {
                            type: "scale",
                            active: false,
                            value: 1
                        }, {
                            type: "moveX",
                            active: false,
                            value: 0
                        }, {
                            type: "moveY",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateX",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateY",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateZ",
                            active: false,
                            value: 0
                        }, {
                            type: "opacity",
                            active: false,
                            value: 100
                        }, {
                            type: "curve",
                            value: "cubic-bezier(.4,0,.4,1)"
                        }
                    ],
                    active: false
                },
                mod: {
                    value: [
                        {
                            type: "scale",
                            active: false,
                            value: 1
                        }, {
                            type: "moveX",
                            active: false,
                            value: 0
                        }, {
                            type: "moveY",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateX",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateY",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateZ",
                            active: false,
                            value: 0
                        }, {
                            type: "opacity",
                            active: false,
                            value: 100
                        }, {
                            type: "curve",
                            value: "cubic-bezier(.4,0,.4,1)"
                        }
                    ],
                    active: false
                }
            },
            anmHide: {
                user: {
                    value: [
                        {
                            type: "scale",
                            active: false,
                            value: 1
                        }, {
                            type: "moveX",
                            active: false,
                            value: 0
                        }, {
                            type: "moveY",
                            active: true,
                            value: 20
                        }, {
                            type: "rotateX",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateY",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateZ",
                            active: false,
                            value: 0
                        }, {
                            type: "opacity",
                            active: true,
                            value: 100
                        }, {
                            type: "curve",
                            value: "cubic-bezier(.4,0,.4,1)"
                        }
                    ],
                    active: true
                },
                sub: {
                    value: [
                        {
                            type: "scale",
                            active: false,
                            value: 1
                        }, {
                            type: "moveX",
                            active: false,
                            value: 0
                        }, {
                            type: "moveY",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateX",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateY",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateZ",
                            active: false,
                            value: 0
                        }, {
                            type: "opacity",
                            active: false,
                            value: 100
                        }, {
                            type: "curve",
                            value: "cubic-bezier(.4,0,.4,1)"
                        }
                    ],
                    active: false
                },
                vip: {
                    value: [
                        {
                            type: "scale",
                            active: false,
                            value: 1
                        }, {
                            type: "moveX",
                            active: false,
                            value: 0
                        }, {
                            type: "moveY",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateX",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateY",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateZ",
                            active: false,
                            value: 0
                        }, {
                            type: "opacity",
                            active: false,
                            value: 100
                        }, {
                            type: "curve",
                            value: "cubic-bezier(.4,0,.4,1)"
                        }
                    ],
                    active: false
                },
                mod: {
                    value: [
                        {
                            type: "scale",
                            active: false,
                            value: 1
                        }, {
                            type: "moveX",
                            active: false,
                            value: 0
                        }, {
                            type: "moveY",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateX",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateY",
                            active: false,
                            value: 0
                        }, {
                            type: "rotateZ",
                            active: false,
                            value: 0
                        }, {
                            type: "opacity",
                            active: false,
                            value: 100
                        }, {
                            type: "curve",
                            value: "cubic-bezier(.4,0,.4,1)"
                        }
                    ],
                    active: false
                }
            }
        };
    